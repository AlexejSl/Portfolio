import styles from "./SideNav.module.scss";
import React, { useEffect, useState } from "react";

function SideNav() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const sectionIds = ["Home", "Portfolio", "AboutMe", "Contact"];
    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        setActiveSection(id);
      }
    });
  };

  return (
    <div className={styles.sideNav}>
      <p
        className={`${
          activeSection === "Home"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "Home" ? "Home" : ""}
      </p>
      <p
        className={`${
          activeSection === "Portfolio"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "Portfolio" ? "Portfolio" : ""}
      </p>
      <p
        className={`${
          activeSection === "AboutMe"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "AboutMe" ? "About me" : ""}
      </p>
      <p
        className={`${
          activeSection === "Contact"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "Contact" ? "Contact" : ""}
      </p>
    </div>
  );
}

export default SideNav;
