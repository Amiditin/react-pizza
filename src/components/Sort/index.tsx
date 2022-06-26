import React from 'react';
import styles from './Sort.module.scss';
import { CaretDownOutlined } from '@ant-design/icons';

import { pizzaFilters } from '../../utils/constans/pizzaOptions';
import { IPizzaFilters } from '../../utils/interfaces/IPizzaOptions';

interface ISort {
  selectedFilter: IPizzaFilters;
  setSelectedFilter: React.Dispatch<React.SetStateAction<IPizzaFilters>>;
}

const Sort: React.FC<ISort> = ({ selectedFilter, setSelectedFilter }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const onClickSelect = (filter: IPizzaFilters) => {
    setSelectedFilter(filter);
    setIsVisible(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <CaretDownOutlined rotate={isVisible ? 180 : 0} />
        <b>Сортировка по:</b>
        <div onClick={() => setIsVisible(!isVisible)}>{selectedFilter.title}</div>
      </div>
      {isVisible && (
        <div className={styles.popup}>
          <ul>
            {pizzaFilters.map((filter) => (
              <li
                className={selectedFilter.id === filter.id ? styles.active : 'disabled'}
                key={filter.id}
                onClick={() => onClickSelect(filter)}>
                {filter.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
