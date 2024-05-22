function Header() {
    return (
      <>
        <nav className="navigation">
            <div className="logo"><img src="#" alt="mon logo"/></div>

            <ul className="navLink">
                <li><a className="navTextAccueil navText" href="#accueil">Accueil</a></li>
                <li><a href="#discipline" className="navText navTextDisciplines">Disciplines</a></li>
                <li><a href="#professeur" className="navText navTextProfesseurs">Professeurs</a></li>
                <li><a href="#faq" className="navText navTextFaq">Faq</a></li>
                <li><a href="#contact" className="navText navTextContact">Contact</a></li>
            </ul>
        </nav>
      </>
    );
  }
  
  export default Header;