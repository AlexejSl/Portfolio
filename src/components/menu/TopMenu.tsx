import { useLanguage } from "../../store/LanguageContext";
import LanguageMenu from "./LanguageMenu";
import styles from "./Menu.module.scss";
import { type languageObj } from "./SideNav";

const languageObj: languageObj = {
  en: {
    home: "Home",
    portfolio: "Portfolio",
    aboutMe: "About me",
    contact: "Contact",
  },
  sk: {
    home: "Domov",
    portfolio: "Portfólio",
    aboutMe: "O mne",
    contact: "Kontakt",
  },
};

type TopMenuProps = {
  windowWidth: number;
};

function TopMenu({ windowWidth }: TopMenuProps) {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? languageObj.en : languageObj.sk;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const scrollOptions = {
        behavior: "smooth",
        block: windowWidth < 750 ? "start" : "center",
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
            {currentLanguage.home}
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("Portfolio")}
          >
            {currentLanguage.portfolio}
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("AboutMe")}
          >
            {currentLanguage.aboutMe}
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__button}
            onClick={() => handleScrollTo("Contact")}
          >
            {currentLanguage.contact}
          </button>
        </li>
      </ul>
      {windowWidth < 848 ? "" : <LanguageMenu />}
    </div>
  );
}

export default TopMenu;
