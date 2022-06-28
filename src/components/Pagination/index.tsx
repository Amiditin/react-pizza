import React from 'react';
import styles from './Pagination.module.scss';
import { Pagination as PaginationAntD } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPageSize, setCurPage } from '../../redux/pagination/slice';

interface IPagination {
  total: number | undefined;
}

const Pagination: React.FC<IPagination> = ({ total }) => {
  const { curPage, pageSize } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    window.addEventListener('resize', () =>
      window.innerWidth > 1060 && window.innerWidth <= 1400
        ? pageSize !== 3 && dispatch(setPageSize(3))
        : pageSize !== 4 && dispatch(setPageSize(4)),
    );
  }, [dispatch, pageSize]);

  return (
    <div className={styles.pagination}>
      <PaginationAntD
        current={curPage}
        pageSize={pageSize}
        onChange={(page) => dispatch(setCurPage(page))}
        defaultPageSize={pageSize}
        total={total}
      />
    </div>
  );
};

export default Pagination;
