import React from 'react';
import styles from './Sort.module.scss';
import { CaretDownOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setSort } from '../../redux/filter/slice';

import { pizzaSorts } from '../../utils/constans/pizzaOptions';
import { IPizzaSort } from '../../utils/interfaces/IPizzaOptions';

export const Sort: React.FC = () => {
  const { sort } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const sortLabelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      const _e = e as MouseEvent & { path: Node[] };

      sortLabelRef.current && !_e.path.includes(sortLabelRef.current) && setIsVisible(false);
    };

    isVisible && document.body.addEventListener('click', closePopup);

    return () => document.body.removeEventListener('click', closePopup);
  }, [isVisible]);

  const onClickSelect = (sort: IPizzaSort) => {
    dispatch(setSort(sort));
    setIsVisible(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label} ref={sortLabelRef}>
        <CaretDownOutlined rotate={isVisible ? 180 : 0} />
        <b>Сортировка по:</b>
        <div onClick={() => setIsVisible(!isVisible)}>{sort.title}</div>
      </div>
      {isVisible && (
        <div className={styles.popup}>
          <ul>
            {pizzaSorts.map((item) => (
              <li
                className={sort.id === item.id ? styles.active : 'disabled'}
                key={item.id}
                onClick={() => onClickSelect(item)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
