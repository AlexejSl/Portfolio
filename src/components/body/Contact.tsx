import styles from "./Contact.module.scss";
import discordSVG from "../../assets/discordSVG.svg";
import linkedinSVG from "../../assets/linkedinSVG.svg";
import githubSVG from "../../assets/githubSVG.svg";
import { useLanguage } from "../../store/LanguageContext";

function Contact() {
  const { isEnglish } = useLanguage();

  return (
    <div className={styles.contact} id="Contact">
      <h2 className={styles.contact__header}>
        {isEnglish ? "Contact" : "Kontakt"}
      </h2>
      <div className={styles.contact__box}>
        <a
          className={styles.contact__item}
          href="https://www.linkedin.com/in/alexejsl/"
        >
          <img
            className={styles.contact__item_img}
            src={linkedinSVG}
            alt="linkedIn icon"
          />
          <p className={styles.contact__item_text}>
            <span className={styles.orange}>AlexejSl</span>{" "}
            {isEnglish ? "on LinkedIn" : "na LinkedIne"}
          </p>
        </a>

        <a className={styles.contact__item} href="https://github.com/AlexejSl">
          <img
            className={styles.contact__item_img}
            src={githubSVG}
            alt="github icon"
          />
          <p className={styles.contact__item_text}>
            <span className={styles.orange}>AlexejSl</span>{" "}
            {isEnglish ? "on GitHub" : "na GitHube"}
          </p>
        </a>

        <div className={styles.contact__item}>
          <img
            className={styles.contact__item_img}
            src={discordSVG}
            alt="discord icon"
          />
          <p className={styles.contact__item_text}>
            <span className={styles.orange}>alexejsl</span>{" "}
            {isEnglish ? "on Discord" : "na Discorde"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
