import AboutMe from "./components/body/AboutMe";
import Contact from "./components/body/Contact";
import Home from "./components/body/Home";
import Portfolio from "./components/body/Portfolio";
import TopMenu from "./components/menu/TopMenu";
import SideNav from "./components/menu/SideNav";
import { LanguageProvider } from "./store/LanguageContext";
import LanguageMenu from "./components/menu/LanguageMenu";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LanguageProvider>
      <TopMenu windowWidth={windowWidth} />
      <SideNav />
      {windowWidth < 848 ? <LanguageMenu /> : ""}
      <main>
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
