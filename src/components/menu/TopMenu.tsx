import LanguageMenu from "./LanguageMenu";
import styles from "./Menu.module.scss";

function TopMenu() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const scrollOptions = {
        behavior: "smooth",
        block: "center",
        inline: "start",
      } as ScrollIntoViewOptions;

      element.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("Home")}
          >
            Home
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("Portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("AboutMe")}
          >
            About me
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("Contact")}
          >
            Contact
          </button>
        </li>
      </ul>
      <LanguageMenu />
    </div>
  );
}

export default TopMenu;
