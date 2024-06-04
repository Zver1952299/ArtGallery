import Cards from './components/Cards';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SettingsBlock from './components/SettingsBlock';

import styles from './scss/app.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <SettingsBlock />
      <Cards />
      <Pagination />
    </div>
  );
}

export default App;
