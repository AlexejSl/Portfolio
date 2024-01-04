import styles from "./Portfolio.module.scss";
import pokecards_video from "../../assets/pokecards_video.mp4";
import portfolio_img from "../../assets/portfolio_img.png";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import languageObj from "../language/PortfolioLanguage";
import { useLanguage } from "../../store/LanguageContext";

function Portfolio() {
  const { isEnglish } = useLanguage();

  const currentLanguage = isEnglish ? languageObj.en : languageObj.sk;

  return (
    <div className={styles.portfolioContainer} id="Portfolio">
      <h2 className={styles.header}>{currentLanguage.header}</h2>
      <div className={styles.portfolioContainer__flex}>
        <div className={styles.project1}>
          <video controls className={styles.project1__image}>
            <source src={pokecards_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className={styles.project1__header}>
            {currentLanguage.project1.projectHeader}
          </h3>
          <p className={styles.project1__text}>
            {currentLanguage.project1.text1}
          </p>
          <p className={styles.project1__text}>
            <span className={styles.project1__text_start}>
              {currentLanguage.project1.cardSearch}
            </span>
            {currentLanguage.project1.text2}
          </p>
          <p className={styles.project1__text}>
            <span className={styles.project1__text_start}>
              {currentLanguage.project1.userAccounts}
            </span>
            {currentLanguage.project1.text3}
          </p>
          <p className={styles.project1__text}>
            <span className={styles.project1__text_start}>
              {currentLanguage.project1.mainGoal}
            </span>
            {currentLanguage.project1.text4}
          </p>
          <div className={styles.project1__links_flex}>
            <a href="https://github.com/AlexejSl/Pokecards-public">
              <IoLogoGithub className={styles.project1__links_icon} />
            </a>
            <a href="https://pokecards.fun/">
              <TbWorldWww className={styles.project1__links_icon} />
            </a>
          </div>
        </div>

        <div className={styles.project2}>
          <img
            className={styles.project1__image}
            src={portfolio_img}
            alt="Portfolio website"
          />
          <h3 className={styles.project2__header}>
            {currentLanguage.project2.projectHeader}
          </h3>
          <p className={styles.project2__text}>
            {currentLanguage.project2.text1}
          </p>

          <p className={styles.project2__text}>
            {currentLanguage.project2.text2}
          </p>
          <a
            href="https://github.com/AlexejSl/Portfolio"
            className={styles.project2__links_flex}
          >
            <IoLogoGithub className={styles.project2__links_icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
