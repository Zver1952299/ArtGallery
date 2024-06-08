import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cards from './components/Cards';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SettingsBlock from './components/SettingsBlock';
import Filter from './components/Filter';

import styles from './scss/app.module.scss';
import { RootState } from './redux/store';

function App() {
  console.log('render app');

  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <SettingsBlock />
      <Cards />
      <Pagination />
      <Filter />
    </div>
  );
}

export default App;
