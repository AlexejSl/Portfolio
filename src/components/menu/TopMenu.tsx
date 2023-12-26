import LanguageMenu from "./LanguageMenu";
import styles from "./Menu.module.scss";

function TopMenu() {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <button className={styles.menu__button}>Home</button>
        </li>
        <li className={styles.menu__item}>
          <button className={styles.menu__button}>Portfolio</button>
        </li>
        <li className={styles.menu__item}>
          <button className={styles.menu__button}>About me</button>
        </li>
        <li className={styles.menu__item}>
          <button className={styles.menu__button}>Contact</button>
        </li>
      </ul>
      <LanguageMenu />
    </div>
  );
}

export default TopMenu;
