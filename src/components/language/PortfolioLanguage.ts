type Project1 = {
  projectHeader: string;
  cardSearch: string;
  userAccounts: string;
  mainGoal: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

type Project2 = {
  projectHeader: string;
  text1: string;
  text2: string;
};

type LanguageObjType = {
  en: {
    header: string;
    project1: Project1;
    project2: Project2;
  };
  sk: {
    header: string;
    project1: Project1;
    project2: Project2;
  };
};

const languageObj: LanguageObjType = {
  en: {
    header: `Portfolio`,
    project1: {
      projectHeader: `PokeCards`,
      cardSearch: `Card Search: `,
      userAccounts: `User accounts: `,
      mainGoal: `Main goal`,
      text1: `The Pokecards is a web application designed for pokémon card
      collectors.`,
      text2: `The application provides users with a card search which is the main
      functionality of my website.`,
      text3: `Users can create account so they get the option of adding cards to
      "My cards" section. This will help users to keep track of cards they
      own. Whole back-end is done with the help of Supabase.`,
      text4: ` of this project was to get comfortable working with React and gain
      valuable skills.`,
    },
    project2: {
      projectHeader: `My portfolio website`,
      text1: `This portfolio website is a place where you can get to know me better, check out my projects,
       and drop me a message if you are interested in working with me.`,
      text2: `I wanted to apply what I learned from a helpful Typescript in React Udemy course, making it a practical experience to strengthen my grasp of TypeScript.`,
    },
  },
  sk: {
    header: `Portfólio`,
    project1: {
      projectHeader: `PokeCards`,
      cardSearch: `Vyhľadávanie kariet: `,
      userAccounts: `Používateľské účty: `,
      mainGoal: `Hlavným cieľom`,
      text1: `Pokecards je webová aplikácia navrhnutá pre zberateľov pokémonových kariet.`,
      text2: `Aplikácia poskytuje používateľom vyhľadávanie kariet, ktoré je hlavnou funkciou mojej webstránky.`,
      text3: `Používatelia si môžu vytvoriť účet, čo im umožňuje pridávať karty do sekcie "Moje karty". Týmto spôsobom si 
      môžu používatelia udržiavať prehľad o kartách, ktoré vlastnia. Backend je urobený s pomocou Supabase.`,
      text4: ` tohto projektu bolo vylepšenie mojich zručností práce s Reactom`,
    },
    project2: {
      projectHeader: `Moje portfólio`,
      text1: `Moje portfolio je miesto, kde ma môžete lepšie spoznať, pozrieť si moje projekty
       a napísať mi správu, ak máte záujem o spoluprácu.`,
      text2: `Prácou na tomto projekte prakticky využívam vedomosti, ktoré som získal z Udemy kurzu typescriptu v reacte.
      `,
    },
  },
};

export default languageObj;
