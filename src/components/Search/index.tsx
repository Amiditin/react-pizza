import React from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../hooks/redux';
import { setSearch } from '../../redux/filter/slice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string>('');

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearch(''));
    inputRef.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearch = React.useCallback(
    debounce((value: string) => {
      console.log('debounce');
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

export default Search;
