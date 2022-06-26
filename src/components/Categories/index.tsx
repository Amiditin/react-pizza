import React from 'react';
import styles from './Categories.module.scss';

import { pizzaCategories } from '../../utils/constans/pizzaOptions';
import { IPizzaCategory } from '../../utils/interfaces/IPizzaOptions';

interface ICategories {
  activeCategory: IPizzaCategory;
  setActiveCategory: React.Dispatch<React.SetStateAction<IPizzaCategory>>;
}

const Categories: React.FC<ICategories> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className={styles.categories}>
      <ul>
        {pizzaCategories.map((сategory) => (
          <li
            className={activeCategory.id === сategory.id ? styles.active : 'disabled'}
            key={сategory.id}
            onClick={() => activeCategory.id !== сategory.id && setActiveCategory(сategory)}>
            {сategory.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
