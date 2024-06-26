import { useEffect } from "react";
import {PageAccueil, PageDiscipline, PageProfesseur, PageFaq, PageContact} from './pages';
import {scroll, majCouleurHeader} from './fonctions/navigation';
import Header from "./composants/header/header";

function App() {
  useEffect(() => {
    majCouleurHeader();
    scroll();

    window.addEventListener('load', majCouleurHeader)
    window.addEventListener('scroll', majCouleurHeader)
    return () => {
      window.removeEventListener('load', majCouleurHeader);
      window.removeEventListener('scroll', majCouleurHeader);
    };
  }, []);

  return (
    <>
    <Header/>
    <section id="accueil"><PageAccueil /></section>
    <section id="discipline"><PageDiscipline/></section>
    <section id="professeur"><PageProfesseur/></section>
    <section id="faq"><PageFaq/></section>
    <section id="contact"><PageContact/></section>
    </>
  );
}

export default App;
