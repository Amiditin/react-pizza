import React from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setSearch } from '../../redux/filter/slice';

export const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setValue(searchParams.get('search') || '');
  }, [searchParams]);

  const onClickClear = () => {
    setValue('');
    dispatch(setSearch(''));
    inputRef.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearch = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearch(value));
    }, 500),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        ref={inputRef}
        placeholder="Поиск пицц..."
        value={value}
        onChange={onChangeInput}
      />
      <SearchOutlined className={styles.icon} />
      {value && <CloseOutlined className={styles.clear} onClick={onClickClear} />}
    </div>
  );
};
