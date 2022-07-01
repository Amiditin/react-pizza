import React from 'react';
import styles from './Home.module.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilters, setSortDescending } from '../../redux/filter/slice';
import { setCurPage } from '../../redux/pagination/slice';
import { fetchPizzas } from '../../redux/pizza/asyncActions';

import Categories from '../../components/Categories';
import Pagination from '../../components/Pagination';
import PizzaBlock from '../../components/PizzaBlock';
import PizzaBlockSkeleton from '../../components/PizzaBlock/Skeleton';
import Sort from '../../components/Sort';
import Search from '../../components/Search';

import { pizzaCategories, pizzaSorts } from '../../utils/constans/pizzaOptions';

const Home: React.FC = () => {
  const { category, search, sort, sortDescending } = useAppSelector((state) => state.filter);
  const { items } = useAppSelector((state) => state.pizza);
  const { curPage, pageSize } = useAppSelector((state) => state.pagination);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mountSearchParams, setMountFirstSearchParams] = React.useState<boolean>(true);

  // set filters at the first rendering
  React.useLayoutEffect(() => {
    let options = { category: pizzaCategories[0], sort: pizzaSorts[0], search: '' };

    if (location.search) {
      const categoryParam = searchParams.get('category');
      const sortParam = searchParams.get('sort');
      const searchParam = searchParams.get('search');

      const category = pizzaCategories.find((item) => item.name === categoryParam);
      const sort = pizzaSorts.find((item) => item.name === sortParam);

      if (category) options.category = category;
      if (sort) options.sort = sort;
      if (searchParam) options.search = searchParam;
    }

    if (mountSearchParams || !location.search) dispatch(setFilters(options));

    setMountFirstSearchParams(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  React.useEffect(() => {
    if (!mountSearchParams) {
      setSearchParams({ category: category.name, search: search, sort: sort.name });
      sortDescending && dispatch(setSortDescending(false));
      curPage !== 1 && dispatch(setCurPage(1));

      dispatch(fetchPizzas({ category, sort, search }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search, sort, mountSearchParams]);

  const onClickDescending = () => {
    dispatch(setSortDescending(!sortDescending));
    items?.reverse();
  };

  return (
    <div className="container">
      <div className={styles.top}>
        <h2 className={styles.title}>
          {category.name} пиццы
          <img
            className={`${styles.sortSvg} ${sortDescending ? styles.descending : ''}`}
            src="/img/sort.svg"
            alt="sort"
            onClick={onClickDescending}
          />
        </h2>
        <Search />
      </div>
      <div className={styles.middle}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.items}>
        {items
          ? items
              .slice((curPage - 1) * pageSize, curPage * pageSize)
              .map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array.from({ length: pageSize }, (_, i) => <PizzaBlockSkeleton key={i} />)}
      </div>
      <Pagination total={items?.length} />
    </div>
  );
};

export default Home;
