import React from 'react';
import styles from './PizzaBlock.module.scss';

import IPizza from '../../utils/interfaces/IPizza';
import { pizzaTypes } from '../../utils/constans/pizzaOptions';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addPizzaToCart } from '../../redux/cart/slice';

const PizzaBlock: React.FC<IPizza> = ({ imageUrl, title, types, sizes, price }) => {
  const [numPizzas, setNumPizzas] = React.useState<number>(0);
  const [curType, setCurType] = React.useState<number>(types[0]);
  const [curSize, setCurSize] = React.useState<number>(sizes[0]);

  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setNumPizzas(
      items.reduce((acc, item) => (item.value.title === title ? acc + item.number : acc), 0),
    );
  }, [items, title]);

  const onClickAdd = () => {
    dispatch(addPizzaToCart({ imageUrl, title, type: curType, size: curSize, price }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.selector}>
          <ul>
            {types.map((typeId) => (
              <li
                className={curType === typeId ? styles.active : 'disabled'}
                key={typeId}
                onClick={() => curType !== typeId && setCurType(typeId)}>
                {pizzaTypes.find((type) => type.id === typeId)?.name || 'стандартное'}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                className={curSize === size ? styles.active : 'disabled'}
                key={size}
                onClick={() => curSize !== size && setCurSize(size)}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {price} ₽</div>
          <button className="button button--outline button--add" onClick={onClickAdd}>
            <PlusOutlined />
            <span>Добавить</span>
            <i>{numPizzas}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
