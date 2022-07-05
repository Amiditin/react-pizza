import React, { useRef } from 'react';
import styles from './Pagination.module.scss';
import { Pagination as PaginationAntD } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPageSize, setCurPage } from '../../redux/pagination/slice';

type PaginationProps = {
  total: number | undefined;
};

export const Pagination: React.FC<PaginationProps> = ({ total }) => {
  const { curPage, pageSize } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();
  const curPageRef = useRef<number>(1);

  React.useEffect(() => {
    const changePageSize = () => {
      if (window.innerWidth > 1400) pageSize !== 8 && dispatch(setPageSize(8));
      else if (window.innerWidth > 730) pageSize !== 6 && dispatch(setPageSize(6));
      else pageSize !== 4 && dispatch(setPageSize(4));
    };

    changePageSize();

    window.addEventListener('resize', changePageSize);

    return () => window.removeEventListener('resize', changePageSize);
  }, [dispatch, pageSize]);

  React.useEffect(() => {
    if (curPageRef.current !== curPage) window.scrollTo({ top: 140, left: 0, behavior: 'smooth' });

    curPageRef.current = curPage;
  }, [curPage]);

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
