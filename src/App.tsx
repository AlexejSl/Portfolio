import AboutMe from "./components/body/AboutMe";
import Contact from "./components/body/Contact";
import Home from "./components/body/Home";
import Portfolio from "./components/body/Portfolio";
import TopMenu from "./components/menu/TopMenu";
import SideNav from "./components/menu/SideNav";
import { LanguageProvider } from "./store/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <TopMenu />
      <SideNav />
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
