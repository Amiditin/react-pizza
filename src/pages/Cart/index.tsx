import React from 'react';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, DeleteOutlined, LeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { CartItem } from '../../components';
import { clearCart } from '../../redux/cart/slice';
import { Popconfirm } from 'antd';

const Cart: React.FC = () => {
  const { items, numberItems, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onClickPay = () => {
    alert('Спасибо за покупку');
    dispatch(clearCart());
  };

  return (
    <div className={styles.content}>
      <div className="container">
        {items.length !== 0 ? (
          <div className={styles.cart}>
            <div className={styles.top}>
              <h2 className={styles.title}>
                <ShoppingCartOutlined />
                Корзина
              </h2>
              <Popconfirm
                title="Вы действительно хотите очистить корзину?"
                onConfirm={() => dispatch(clearCart())}
                okText="Да"
                cancelText="Нет">
                <div className={styles.clear}>
                  <span>Очистить корзину</span>
                  <DeleteOutlined />
                </div>
              </Popconfirm>
            </div>
            <div className={styles.items}>
              {items.map((item, index) => (
                <CartItem key={index} pizza={item} />
              ))}
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom_details}>
                <span>
                  Всего пицц: <b>{numberItems} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
                </span>
              </div>
              <div className={styles.bottom_buttons}>
                <Link to="/" className={`button button--outline button--add ${styles.button_back}`}>
                  <LeftOutlined />
                  <p>Вернуться назад</p>
                </Link>
                <Link to="/">
                  <div className={`button ${styles.button_pay}`} onClick={onClickPay}>
                    Оплатить сейчас
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы не выбрали ещё никакую пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img src="/img/empty-cart.png" alt="Empty cart" />
            <Link to="/">
              <button className="button button--black">Вернуться назад</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
