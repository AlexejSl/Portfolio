import { useLanguage } from "../../store/LanguageContext";
import styles from "./SideNav.module.scss";
import { useEffect, useState } from "react";

export type languageObj = {
  en: {
    home: string;
    portfolio: string;
    aboutMe: string;
    contact: string;
  };
  sk: {
    home: string;
    portfolio: string;
    aboutMe: string;
    contact: string;
  };
};

const languageObj: languageObj = {
  en: {
    home: "Home",
    portfolio: "Portfolio",
    aboutMe: "About me",
    contact: "Contact",
  },
  sk: {
    home: "Domov",
    portfolio: "Portfólio",
    aboutMe: "O mne",
    contact: "Kontakt",
  },
};

function SideNav() {
  const [activeSection, setActiveSection] = useState("Home");

  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? languageObj.en : languageObj.sk;

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
        {activeSection === "Home" ? currentLanguage.home : ""}
      </p>
      <p
        className={`${
          activeSection === "Portfolio"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "Portfolio" ? currentLanguage.portfolio : ""}
      </p>
      <p
        className={`${
          activeSection === "AboutMe"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "AboutMe" ? currentLanguage.aboutMe : ""}
      </p>
      <p
        className={`${
          activeSection === "Contact"
            ? styles.sideNav__item_active
            : styles.sideNav__item
        }`}
      >
        {activeSection === "Contact" ? currentLanguage.contact : ""}
      </p>
    </div>
  );
}

export default SideNav;
