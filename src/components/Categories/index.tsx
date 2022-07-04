import React from 'react';
import styles from './Categories.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setCategory } from '../../redux/filter/slice';

import { pizzaCategories } from '../../utils/constans/pizzaOptions';

export const Categories: React.FC = () => {
  const { category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.categories}>
      <ul>
        {pizzaCategories.map((item) => (
          <li
            className={category.id === item.id ? styles.active : 'disabled'}
            key={item.id}
            onClick={() => category.id !== item.id && dispatch(setCategory(item))}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
