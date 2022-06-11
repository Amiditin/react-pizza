import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={510}
      title="Загрузка..."
      className="pizza-block"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="120" r="120" />
      <rect x="45" y="267" rx="10" ry="10" width="190" height="20" />
      <rect x="0" y="312" rx="10" ry="10" width="280" height="108" />
      <rect x="0" y="448" rx="14" ry="14" width="100" height="30" />
      <rect x="128" y="438" rx="30" ry="30" width="152" height="47" />
    </ContentLoader>
  );
};

export default Skeleton;
