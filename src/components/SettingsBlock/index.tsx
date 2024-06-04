import Search from '../Search';
import Sort from '../Sort';

import styles from './SettingsBlock.module.scss';

function SettingsBlock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Search />
        <Sort />
      </div>
    </div>
  );
}

export default SettingsBlock;
