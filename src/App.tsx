import AboutMe from "./components/body/AboutMe";
import Contact from "./components/body/Contact";
import Home from "./components/body/Home";
import Portfolio from "./components/body/Portfolio";
import TopMenu from "./components/menu/TopMenu";
import styles from "./_base.scss";

function App() {
  return (
    <>
      <TopMenu />
      <main>
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
      </main>
    </>
  );
}

export default App;
