import React from 'react';
import styles from './LoadingPage.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

export const LoadingPage: React.FC = () => {
  return (
    <div className={styles.loading}>
      <h1 className={styles.title}>
        Загрузка старницы
        <LoadingOutlined />
      </h1>
    </div>
  );
};
