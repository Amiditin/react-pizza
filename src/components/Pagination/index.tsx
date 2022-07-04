import React from 'react';
import styles from './Pagination.module.scss';
import { Pagination as PaginationAntD } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPageSize, setCurPage } from '../../redux/pagination/slice';

type PaginationProps = {
  total: number | undefined;
};

const Pagination: React.FC<PaginationProps> = ({ total }) => {
  const { curPage, pageSize } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const changePageSize = () => {
      window.innerWidth > 1060 && window.innerWidth <= 1400
        ? pageSize !== 3 && dispatch(setPageSize(3))
        : pageSize !== 4 && dispatch(setPageSize(4));
    };

    changePageSize();

    window.addEventListener('resize', changePageSize);

    return () => window.removeEventListener('resize', changePageSize);
  }, [dispatch, pageSize]);

  return (
    <div className={styles.pagination}>
      <PaginationAntD
        current={curPage}
        pageSize={pageSize}
        onChange={(page, pageSize) => {
          dispatch(setCurPage(page));
          dispatch(setPageSize(pageSize));
        }}
        defaultPageSize={pageSize}
        total={total}
      />
    </div>
  );
};

export default Pagination;
