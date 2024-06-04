import { ChangeEvent, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice';

import searchIcon from '../../assets/Search/search.svg';
import styles from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchValue = useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 500),
    [dispatch]
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Painting title"
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
      <img src={searchIcon} alt="searchIcon" className={styles.icon} />
    </div>
  );
}

export default Search;
