import sortLogo from '../../assets/Sort/sort.svg';
import styles from './Sort.module.scss';

function Sort() {
  return (
    <div className={styles.sort}>
      <img src={sortLogo} alt="sortLogo" />
    </div>
  );
}

export default Sort;
