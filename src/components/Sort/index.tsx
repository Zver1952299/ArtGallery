import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import sortDark from '../../assets/Sort/sortDark.svg';
import sortLight from '../../assets/Sort/sortLight.svg';

import styles from './Sort.module.scss';
import { setIsOpen } from '../../redux/slices/filterSlice';

function Sort() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button
      type="button"
      className={styles.sort}
      onClick={() => dispatch(setIsOpen(true))}
    >
      <img src={theme === 'dark' ? sortDark : sortLight} alt="sortLogo" />
    </button>
  );
}

export default Sort;
