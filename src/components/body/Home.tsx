import styles from "./Home.module.scss";
import my_picture_cropped from "../../assets/my_picture_cropped.png";
import TechStackList from "./TechStackList";
import { useLanguage } from "../../store/LanguageContext";

type languageObj = {
  en: {
    header: string;
    text: string;
  };
  sk: {
    header: string;
    text: string;
  };
};

const languageObj: languageObj = {
  en: {
    header: `Hi, my name is `,
    text: `I am a graduate in the Theory of Digital Games who has discovered a passion for programming, and I am eager to pursue a career as a React developer.`,
  },
  sk: {
    header: `Ahoj, volám sa `,
    text: `Som bakalár v obore Teória digitálnych hier, ktorého baví programovať, a s nadšením sa chystám venovať kariére React developera.`,
  },
};

function Home() {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? languageObj.en : languageObj.sk;

  return (
    <div className={styles.HomeContainer} id="Home">
      <div className={styles.homeTextBox}>
        <h1 className={styles.homeTextBox__header}>
          {currentLanguage.header} <span className={styles.orange}>Alexej</span>
        </h1>
        <p className={styles.homeTextBox__text}>{currentLanguage.text}</p>
        {/* <button className={styles.homeTextBox__button}>Hire me!</button> */}
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.MyImg}
          src={my_picture_cropped}
          alt="Alexej's photo"
        />
      </div>
      <div className={styles.techStack}>
        <p className={styles.techStack__text}>Tech stack</p>
        <div className={styles.techStack__divider}></div>
        <TechStackList />
      </div>
    </div>
  );
}

export default Home;
