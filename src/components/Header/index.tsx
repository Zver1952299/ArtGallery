import logo from '../../assets/Header/logo.svg';
import light_icon from '../../assets/Header/light_icon.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <img src={light_icon} alt="ligth_icon" />
    </div>
  );
}

export default Header;
