import React from 'react';
import styles from './Home.module.scss';

import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import PizzaBlockSkeleton from '../../components/PizzaBlock/Skeleton';
import Sort from '../../components/Sort';

import IPizza from '../../utils/types/IPizza';
import { mockapiUrl } from '../../utils/constans/mockapiUrl';

const Home: React.FC = () => {
  const [items, setItems] = React.useState<IPizza[] | null>(null);

  React.useEffect(() => {
    try {
      fetch(`${mockapiUrl}/items`)
        .then((res) => res.json())
        .then((data) => {
          if (data === 'Not found') throw new Error('');
          setItems(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
        {items
          ? items.map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array.from({ length: 4 }, (_, i) => <PizzaBlockSkeleton key={i} />)}
      </div>
    </div>
  );
};

export default Home;
