import React from 'react';
import styles from './Item.module.scss';

import { MinusCircleOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Item: React.FC = () => {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <img
          className={styles.img}
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
        <div className={styles.text}>
          <h3>Сырный цыпленок</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.count}>
          <MinusCircleOutlined />
          <b>2</b>
          <PlusCircleOutlined />
        </div>
        <div className={styles.price}>
          <b>770 ₽</b>
        </div>
        <div className={styles.remove}>
          <CloseCircleOutlined />
        </div>
      </div>
    </div>
  );
};

export default Item;
