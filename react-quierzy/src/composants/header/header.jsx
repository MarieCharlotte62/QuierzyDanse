import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const closeNav = () => {
    setIsChecked(false);
  };

  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <img src="images/header/logo.webp" alt="logo du club de danse de quierzy"/>
        </div>
        <div className="iconeMenu" onClick={toggleCheckbox}>
          {isChecked ? <FaTimes size={40} color="white" /> : <FaBars size={40} color="white" />}
        </div>
        <ul className={`navLink ${isChecked ? 'active' : ''}`}>
          <li><a href="#accueil" className="navTextAccueil navText" onClick={closeNav}>Accueil</a></li>
          <li><a href="#discipline" className="navText navTextDisciplines" onClick={closeNav}>Disciplines</a></li>
          <li><a href="#professeur" className="navText navTextProfesseurs" onClick={closeNav}>Professeurs</a></li>
          <li><a href="#faq" className="navText navTextFaq" onClick={closeNav}>Faq</a></li>
          <li><a href="#contact" className="navText navTextContact" onClick={closeNav}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
