import { useLanguage } from "../../store/LanguageContext";
import styles from "./Menu.module.scss";

function LanguageMenu() {
  const { isEnglish, setIsEnglish } = useLanguage();

  const handleLangChange = function () {
    setIsEnglish((isEnglish) => !isEnglish);
  };

  return (
    <div className={styles.languageContainer}>
      <p className={styles.languageSwitch}>
        Language:{" "}
        <button className={`${styles.languageSwitch__en} ${styles.active}`}>
          {isEnglish ? "En" : "Sk"}
        </button>
        {""}
        <button
          className={`${styles.languageSwitch__sk}`}
          onClick={handleLangChange}
        >
          {isEnglish ? "Sk" : "En"}
        </button>
      </p>
    </div>
  );
}

export default LanguageMenu;
