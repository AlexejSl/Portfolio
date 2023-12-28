import styles from "./Home.module.scss";
import weirdguy from "../../assets/weirdguy.png";
import TechStackList from "./TechStackList";

function Home() {
  return (
    <div className={styles.HomeContainer} id="Home">
      <div className={styles.homeTextBox}>
        <h1 className={styles.homeTextBox__header}>
          Hi, my name is <span className={styles.orange}>Alexej</span>
        </h1>
        <p className={styles.homeTextBox__text}>
          I am a full-stack developer with a passion for turning great ideas
          into functioning apps.
        </p>
        {/* <button className={styles.homeTextBox__button}>Hire me!</button> */}
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.MyImg} src={weirdguy} />
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
