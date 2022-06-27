import React from 'react';
import styles from './Home.module.scss';

import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import PizzaBlockSkeleton from '../../components/PizzaBlock/Skeleton';
import Sort from '../../components/Sort';

import IPizza from '../../utils/interfaces/IPizza';
import { IPizzaCategory, IPizzaFilters } from '../../utils/interfaces/IPizzaOptions';
import { pizzaCategories, pizzaFilters } from '../../utils/constans/pizzaOptions';
import { mockapiUrl } from '../../utils/constans/mockapiUrl';
import { Pagination } from 'antd';

const Home: React.FC = () => {
  const [items, setItems] = React.useState<IPizza[] | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<IPizzaCategory>(pizzaCategories[0]);
  const [selectedFilter, setSelectedFilter] = React.useState<IPizzaFilters>(pizzaFilters[0]);
  const [sortDescending, setSortDescending] = React.useState<boolean>(false);
  const [curPage, setCurPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(4);

  React.useEffect(() => {
    try {
      setItems(null);
      setSortDescending(false);

      fetch(
        `${mockapiUrl}/items?sortBy=${selectedFilter.name}${
          activeCategory !== pizzaCategories[0] ? '&category=' + activeCategory.id : ''
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
  }, [selectedFilter, activeCategory]);

  const onClickDescending = () => {
    setSortDescending(!sortDescending);
    items?.reverse();
  };

  React.useEffect(() => {
    window.addEventListener('resize', () =>
      window.innerWidth > 1060 && window.innerWidth <= 1400
        ? pageSize !== 3 && setPageSize(3)
        : pageSize !== 4 && setPageSize(4),
    );
  }, [pageSize]);

  return (
    <div className="container">
      <div className={styles.top}>
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Sort selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
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
      <div className={styles.pagination}>
        <Pagination
          current={curPage}
          pageSize={pageSize}
          onChange={(page) => setCurPage(page)}
          defaultPageSize={pageSize}
          total={items?.length}
        />
      </div>
    </div>
  );
};

export default Home;
