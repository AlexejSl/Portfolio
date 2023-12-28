import styles from "./Contact.module.scss";
import discordSVG from "../../assets/discordSVG.svg";
import linkedinSVG from "../../assets/linkedinSVG.svg";
import githubSVG from "../../assets/githubSVG.svg";

function Contact() {
  return (
    <div className={styles.contact} id="Contact">
      <h2 className={styles.contact__header}>Contact</h2>
      <div className={styles.contact__box}>
        <div className={styles.contact__item}>
          <img className={styles.contact__item_img} src={linkedinSVG} />
          <p className={styles.contact__item_text}>
            <span className={styles.orange}>AlexejSl</span> on LinkedIn
          </p>
        </div>

        <div className={styles.contact__item}>
          <img className={styles.contact__item_img} src={githubSVG} />
          <p className={styles.contact__item_text}>
            <span className={styles.orange}>AlexejSl</span> on GitHub
          </p>
        </div>

        <div className={styles.contact__item}>
          <img className={styles.contact__item_img} src={discordSVG} />
          <p className={styles.contact__item_text}>
            <span className={styles.orange}>alexejsl</span> on Discord
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
