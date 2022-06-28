import React from 'react';
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSortDescending } from '../../redux/filter/slice';
import { setCurPage } from '../../redux/pagination/slice';

import Categories from '../../components/Categories';
import Pagination from '../../components/Pagination';
import PizzaBlock from '../../components/PizzaBlock';
import PizzaBlockSkeleton from '../../components/PizzaBlock/Skeleton';
import Sort from '../../components/Sort';

import IPizza from '../../utils/interfaces/IPizza';

import { pizzaCategories } from '../../utils/constans/pizzaOptions';
import { mockapiUrl } from '../../utils/constans/mockapiUrl';

const Home: React.FC = () => {
  const [items, setItems] = React.useState<IPizza[] | null>(null);

  const { category, sort, sortDescending } = useAppSelector((state) => state.filter);
  const { curPage, pageSize } = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      setItems(null);
      dispatch(setSortDescending(false));
      dispatch(setCurPage(1));

      fetch(
        `${mockapiUrl}/items?sortBy=${sort.name}${
          category !== pizzaCategories[0] ? '&category=' + category.id : ''
        }`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (data === 'Not found') throw new Error('');
          setItems(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [category, sort, dispatch]);

  const onClickDescending = () => {
    dispatch(setSortDescending(!sortDescending));
    items?.reverse();
  };

  return (
    <div className="container">
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>
        Все пиццы
        <img
          className={`${styles.sortSvg} ${sortDescending ? styles.descending : ''}`}
          src="/img/sort.svg"
          alt="sort"
          onClick={onClickDescending}
        />
      </h2>
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
