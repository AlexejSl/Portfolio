function Project() {
  return (
    <div className={styles.portfolioContainer__flex}>
        <div className={styles.project1}>
          <img src={placeholder_img} className={styles.project1__image} />
          <h3 className={styles.project1__header}>PokeCards</h3>
          {/* <p
            className={`${styles.project1__text_header} ${styles.margin_adjustment}`}
          >
            Project Overview
          </p> */}
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
  )
}

export default Project
