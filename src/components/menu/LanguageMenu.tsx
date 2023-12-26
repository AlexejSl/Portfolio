import styles from "./Menu.module.scss";

function LanguageMenu() {
  return (
    <div className={styles.languageContainer}>
      <p className={styles.languageSwitch}>
        Language: <button className={styles.languageSwitch__en}>En</button> /{" "}
        <button className={`${styles.languageSwitch__sk} ${styles.active}`}>
          Sk
        </button>
      </p>
    </div>
  );
}

export default LanguageMenu;
