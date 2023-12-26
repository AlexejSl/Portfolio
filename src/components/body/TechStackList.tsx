import css_icon from "../../assets/css_icon.png";
import html_icon from "../../assets/html_icon.png";
import js_icon from "../../assets/js_icon.png";
import react_icon from "../../assets/react_icon.png";
import sass_icon from "../../assets/sass_icon.png";
import styles from "./Home.module.scss";

function TechStackList() {
  return (
    <ul className={styles.techStack__list}>
      <li className={styles.techStack__list_item}>
        <img
          src={html_icon}
          alt="html icon"
          className={styles.techStack__list_icon}
        />
      </li>
      <li className={styles.techStack__list_item}>
        <img
          src={css_icon}
          alt="css icon"
          className={styles.techStack__list_icon}
        />
      </li>
      <li className={styles.techStack__list_item}>
        <img
          src={sass_icon}
          alt="sass icon"
          className={styles.techStack__list_icon}
        />
      </li>
      <li className={styles.techStack__list_item}>
        <img
          src={js_icon}
          alt="javascript icon"
          className={styles.techStack__list_icon}
        />
      </li>
      <li className={styles.techStack__list_item}>
        <img
          src={react_icon}
          alt="react icon"
          className={styles.techStack__list_icon}
        />
      </li>
    </ul>
  );
}

export default TechStackList;
