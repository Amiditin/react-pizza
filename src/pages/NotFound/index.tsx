import React from 'react';
import { FrownOutlined } from '@ant-design/icons';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <FrownOutlined className={styles.icon} />
      <h1 className={styles.title}>Ничего не найдено</h1>
      <p className={styles.description}>
        К сожалению, указанная страница отсутвует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFound;
