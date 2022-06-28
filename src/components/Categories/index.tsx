import React from 'react';
import styles from './Categories.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setCategory } from '../../redux/filter/slice';

import { pizzaCategories } from '../../utils/constans/pizzaOptions';

const Categories: React.FC = () => {
  const { category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.categories}>
      <ul>
        {pizzaCategories.map((сategory) => (
          <li
            className={category.id === сategory.id ? styles.active : 'disabled'}
            key={сategory.id}
            onClick={() => category.id !== сategory.id && dispatch(setCategory(сategory))}>
            {сategory.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
