import React from 'react';
import { pizzaCategories } from '../utils/constans/pizzaOptions';

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<number>(pizzaCategories[0].id);

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((сategory) => (
          <li
            className={activeCategory === сategory.id ? 'active' : 'disabled'}
            key={сategory.id}
            onClick={() => activeCategory !== сategory.id && setActiveCategory(сategory.id)}>
            {сategory.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
