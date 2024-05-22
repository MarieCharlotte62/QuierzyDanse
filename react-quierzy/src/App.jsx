import PageAccueil from "./pages/accueil";
import PageDiscipline from "./pages/discipline";
import PageProfesseur from "./pages/professeur";
import PageFaq from "./pages/faq";
import scroll from "./fonctions/navigation/scroll";
import majCouleurHeader from './fonctions/navigation/majCouleurHeader';
import Header from "./composants/header/header";
// import { useEffect } from "react";

function App() {
  scroll();
  majCouleurHeader();

  window.addEventListener('scroll', majCouleurHeader)
  window.addEventListener('load', majCouleurHeader)

  return (
    <>
    <Header/>
    <section id="accueil"><PageAccueil /></section>
    <section id="discipline"><PageDiscipline/></section>
    <section id="professeur"><PageProfesseur/></section>
    <section id="faq"><PageFaq/></section>
    <section id="contact"></section>
    </>
  );
}

export default App;
