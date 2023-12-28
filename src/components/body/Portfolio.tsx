import styles from "./Portfolio.module.scss";
import placeholder_img from "../../assets/placeholder_img.jpg";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

function Portfolio() {
  return (
    <div className={styles.portfolioContainer} id="Portfolio">
      <h2 className={styles.header}>My projects</h2>
      <div className={styles.portfolioContainer__flex}>
        <div className={styles.project1}>
          <img src={placeholder_img} className={styles.project1__image} />
          <h3 className={styles.project1__header}>PokeCards</h3>
          <p className={styles.project1__text}>
            The Pokecards is a web application designed for pokémon card
            collectors.
          </p>
          <p className={styles.project1__text_header}>Key features</p>
          <p className={styles.project1__text}>
            <span className={styles.project1__text_start}>Card Search: </span>
            The application provides users with a card search which is the main
            functionality of my website.
          </p>
          <p className={styles.project1__text}>
            <span className={styles.project1__text_start}>User accounts: </span>
            Users can create account so they get the option of adding cards to
            "My cards" section. This will help users to keep track of cards they
            own. Whole back-end is done with the help of Supabase.
          </p>
          <p className={styles.project1__text}>
            <span className={styles.project1__text_start}>Main goal </span> of
            this project was to get comfortable working with React and gain
            valuable skills.
          </p>
          <div className={styles.project1__links_flex}>
            <IoLogoGithub className={styles.project1__links_icon} />
            <TbWorldWww className={styles.project1__links_icon} />
          </div>
        </div>

        <div className={styles.project2}>
          <img src={placeholder_img} className={styles.project1__image} />
          <h3 className={styles.project2__header}>My portfolio website</h3>
          <p className={styles.project1__text_header}>Project Overview</p>
          <p className={styles.project2__text}>
            This portfolio website is a place where you can get to know me
            better, check out my projects, and drop me a message if you are
            interested in working with me.
          </p>

          <p className={styles.project2__text}>
            I aimed to put my{" "}
            <span className={styles.project1__text_start}>TypeScript</span>{" "}
            skills into action by working on this project. I wanted to apply
            what I learned from a helpful Udemy course, making it a practical
            experience to strengthen my grasp of TypeScript.
          </p>
          <div className={styles.project2__links_flex}>
            <IoLogoGithub className={styles.project2__links_icon} />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.images}>
  //       <img src={placeholder_img} className={styles.images__1} />
  //     </div>
  //     <div className={styles.text}>
  //       <div className={styles.text__cell1}>
  //         <LuClipboardList />
  //         <h3 className={styles.text__cell1_header}>Project Overview</h3>
  //         <p className={styles.text__cell1_text}>
  //           The Pokecards is a web application designed for people who are
  //           interested in pokemon cards. Building this web app helped me to
  //           transform skills I learned from Udemy courses into a live webpage.
  //         </p>
  //       </div>
  //       <div className={styles.text__cell2}>
  //         {/* svg */}
  //         <h3 className={styles.text__cell1_header}>Cell header</h3>
  //         <p className={styles.text__cell1_text}>Cell text</p>
  //       </div>
  //       <div className={styles.text__cell3}>
  //         {/* svg */}
  //         <h3 className={styles.text__cell1_header}>Cell header</h3>
  //         <p className={styles.text__cell1_text}>Cell text</p>
  //       </div>
  //       <div className={styles.text__cell4}>
  //         {/* svg */}
  //         <h3 className={styles.text__cell1_header}>Cell header</h3>
  //         <p className={styles.text__cell1_text}>Cell text</p>
  //       </div>
  //       <div className={styles.text__cell5}></div>
  //     </div>
  //   </div>
  // );
}

export default Portfolio;
