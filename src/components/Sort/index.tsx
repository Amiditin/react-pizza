import React from 'react';
import styles from './Sort.module.scss';

import { CaretDownOutlined } from '@ant-design/icons';
import { pizzaFilters } from '../../utils/constans/pizzaOptions';

const Sort: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = React.useState<string>(pizzaFilters[0].name);

  const onClickSelect = (name: string) => {
    setSelectedFilter(name);
    setIsVisible(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <CaretDownOutlined rotate={isVisible ? 180 : 0} />
        <b>Сортировка по:</b>
        <div onClick={() => setIsVisible(!isVisible)}>{selectedFilter}</div>
      </div>
      {isVisible && (
        <div className={styles.popup}>
          <ul>
            {pizzaFilters.map((filter) => (
              <li
                className={selectedFilter === filter.name ? styles.active : 'disabled'}
                key={filter.id}
                onClick={() => onClickSelect(filter.name)}>
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
