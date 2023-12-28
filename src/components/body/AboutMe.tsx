import styles from "./AboutMe.module.scss";
import javascript_course from "../../assets/javascript_course.jpg";
import sass_course from "../../assets/sass_course.jpg";
import react_course from "../../assets/react_course.jpg";
import node_course from "../../assets/node_course.png";
import typescript_course from "../../assets/typescript_course.jpg";

function AboutMe() {
  return (
    <div className={styles.aboutMe} id="AboutMe">
      <h2 className={styles.aboutMe__header}>About me</h2>
      <p className={styles.aboutMe__text}>
        Hello, my name is Alexej, and I graduated with a Bachelor's degree in
        the field of Theory of Digital Games from the University of SS. Cyril
        and Methodius in Trnava. My journey into the world of technology began
        during my high school years when I learned about computer hardware, and
        I used to build and repair computers for my friends. My initial exposure
        to web development occurred when I enrolled in a web development class
        during my first year of university. After graduating, I started
        sharpening my web development skills with the help of Udemy courses and
        with the assistance of my friends. I am now actively seeking new
        opportunities to apply my skills and contribute to exciting projects. If
        you're in search of a dedicated and adaptable web developer, I would be
        thrilled to connect and explore potential collaborations
      </p>
      <div className={styles.courses}>
        <h3 className={styles.courses__header}>Courses I completed</h3>
        <div className={styles.courses__box}>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/the-complete-javascript-course/"
          >
            <img className={styles.courses__item_img} src={javascript_course} />
            <p className={styles.courses__item_text}>Javascript</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/advanced-css-and-sass/"
          >
            <img className={styles.courses__item_img} src={sass_course} />
            <p className={styles.courses__item_text}>Sass</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/the-ultimate-react-course/"
          >
            <img className={styles.courses__item_img} src={react_course} />
            <p className={styles.courses__item_text}>React</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
          >
            <img className={styles.courses__item_img} src={node_course} />
            <p className={styles.courses__item_text}>Node.js</p>
          </a>
          <a
            className={styles.courses__item}
            href="https://www.udemy.com/course/react-typescript-the-practical-guide/"
          >
            <img className={styles.courses__item_img} src={typescript_course} />
            <p className={styles.courses__item_text}>Typescript with react</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
