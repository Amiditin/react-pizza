import React from 'react';
import styles from './PizzaBlock.module.scss';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ContentLoader
        speed={2}
        width={280}
        height={525}
        title="Загрузка..."
        className="pizza-block"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        {/* img */}
        <rect x="20" y="20" rx="120" ry="120" width="225" height="155" />
        {/* title */}
        <rect x="17" y="197" rx="10" ry="10" width="200" height="22" />
        {/* description */}
        <rect x="17" y="230" rx="8" ry="8" width="245" height="12" />
        <rect x="17" y="250" rx="8" ry="8" width="245" height="12" />
        <rect x="17" y="270" rx="8" ry="8" width="245" height="12" />
        <rect x="17" y="290" rx="8" ry="8" width="115" height="12" />
        {/* selectors */}
        <rect x="0" y="353" rx="10" ry="10" width="280" height="98" />
        {/* bottom */}
        <rect x="0" y="479" rx="14" ry="14" width="100" height="30" />
        <rect x="128" y="471" rx="30" ry="30" width="152" height="47" /> */
      </ContentLoader>
    </div>
  );
};
