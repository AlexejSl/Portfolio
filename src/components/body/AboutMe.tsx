import styles from "./AboutMe.module.scss";
import javascript_course from "../../assets/javascript_course.jpg";
import sass_course from "../../assets/sass_course.jpg";
import react_course from "../../assets/react_course.jpg";
import node_course from "../../assets/node_course.png";
import typescript_course from "../../assets/typescript_course.jpg";
import { useLanguage } from "../../store/LanguageContext";

type LanguageObj = {
  en: {
    mainHeader: string;
    textPart1: string;

    textPart2: string;
    textPart3: string;
    secondaryHeader: string;
  };
  sk: {
    mainHeader: string;
    textPart1: string;

    textPart2: string;
    textPart3: string;
    secondaryHeader: string;
  };
};

const languageObj: LanguageObj = {
  en: {
    mainHeader: `About me`,
    textPart1: `I graduated with a Bachelor's degree in
    the field of Theory of Digital Games from the University of SS. Cyril
    and Methodius in Trnava.`,
    textPart2: `My journey into the world of technology began during my high school
    years when I became interested in computer hardware, and I used to build and
    repair computers for my friends. My initial exposure to web
    development occurred when I enrolled in a web development class during
    my first year of university.`,
    textPart3: `After graduating, I started sharpening my web development skills with
    the help of Udemy courses and with the assistance of my friends. I am
    now actively seeking new opportunities to apply my skills and
    contribute to exciting projects. If you're in search of a dedicated
    and adaptable web developer, I would be thrilled to connect and
    explore potential collaborations.`,
    secondaryHeader: `Courses I completed`,
  },
  sk: {
    mainHeader: `O mne`,
    textPart1: `Absolvoval som bakalárske štúdium v odbore Teória digitálnych hier na 
    Univerzite sv. Cyrila a Metoda v Trnave.`,
    textPart2: `Moja cesta do sveta technológií sa začala počas mojej strednej školy, kedy som sa začal zaujímať o hardvér počítačov, staval som a opravoval počítače pre mojich kamarátov.
     Moja prvá skúsenosť s vývojom webových stránok bol kurz web developmentu počas prvého ročníka univerzity.`,
    textPart3: `Po ukončení štúdia som si začal zlepšovať svoje zručnosti v oblasti web developmentu pomocou kurzov na platforme Udemy
     a s pomocou mojich kamarátov. V súčasnosti aktívne hľadám nové príležitosti na uplatnenie.
      Ak máte záujem so mnou spolupracovať, tak budem rád ak mi napíšete na jeden z uvedených kontaktov.`,
    secondaryHeader: `Kurzy, ktoré som dokončil`,
  },
};

type currentLanguage = {
  mainHeader: string;
  textPart1: string;
  textPart2: string;
  textPart3: string;
  secondaryHeader: string;
};

function AboutMe() {
  const { isEnglish } = useLanguage();
  const currentLanguage: currentLanguage = isEnglish
    ? languageObj.en
    : languageObj.sk;

  return (
    <div className={styles.aboutMe} id="AboutMe">
      <h2 className={styles.aboutMe__header}>{currentLanguage.mainHeader}</h2>
      <div className={styles.aboutMe__text}>
        <p>{currentLanguage.textPart1} </p>
        <br />
        <p>{currentLanguage.textPart2}</p>
        <br />
        <p>{currentLanguage.textPart3}</p>
      </div>
      <div className={styles.courses}>
        <h3 className={styles.courses__header}>
          {currentLanguage.secondaryHeader}
        </h3>
        <div className={styles.courses__box}>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/the-complete-javascript-course/"
          >
            <img
              className={styles.courses__item_img}
              src={javascript_course}
              alt="Javascript course"
            />
            <p className={styles.courses__item_text}>Javascript</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/advanced-css-and-sass/"
          >
            <img
              className={styles.courses__item_img}
              src={sass_course}
              alt="SASS course"
            />
            <p className={styles.courses__item_text}>Sass</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/the-ultimate-react-course/"
          >
            <img
              className={styles.courses__item_img}
              src={react_course}
              alt="React course"
            />
            <p className={styles.courses__item_text}>React</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
          >
            <img
              className={styles.courses__item_img}
              src={node_course}
              alt="Node.js course"
            />
            <p className={styles.courses__item_text}>Node.js</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/react-typescript-the-practical-guide/"
          >
            <img
              className={styles.courses__item_img}
              src={typescript_course}
              alt="Typescript with react course"
            />
            <p className={styles.courses__item_text}>Typescript with react</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
