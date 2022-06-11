import React from 'react';
import styles from './Header.module.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className={styles.cart}>
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className={styles.delimiter}></div>
            <ShoppingCartOutlined />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
