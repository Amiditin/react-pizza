import React from 'react';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, DeleteOutlined, LeftOutlined } from '@ant-design/icons';

import CartItem from '../../components/CartItem';

const Cart: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.cart}>
          <div className={styles.top}>
            <h2 className={styles.title}>
              <ShoppingCartOutlined />
              Корзина
            </h2>
            <div className={styles.clear}>
              <span>Очистить корзину</span>
              <DeleteOutlined />
            </div>
          </div>
          <div className={styles.items}>
            {Array.from({ length: 4 }, (_, index) => (
              <CartItem key={index} />
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottom_details}>
              <span>
                Всего пицц: <b>3 шт.</b>
              </span>
              <span>
                Сумма заказа: <b>900 ₽</b>
              </span>
            </div>
            <div className={styles.bottom_buttons}>
              <Link to="/" className={`button button--outline button--add ${styles.button_back}`}>
                <LeftOutlined />
                <p>Вернуться назад</p>
              </Link>
              <div className={`button ${styles.button_pay}`}>Оплатить сейчас</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
