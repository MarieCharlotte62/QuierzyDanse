import React, { useState } from 'react';
import { Formulaire } from "../composants/formulaire/formulaire";
import { FaFacebook, FaPhone } from 'react-icons/fa';

function PageContact() {
    const [showNumTel, setShowNumTel] = useState(false);

    const clickLogoTel = () => {
        setShowNumTel(!showNumTel);
    };

    return (
      <>
        <div className="containerContact">
            <div className="formulaire">
                <h2 className="titreContact">contact</h2>
                <Formulaire />
            </div>

            <div className="renseignements"></div>

            <div className="logos">
                <a className="logoFb" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={50} color="white" /></a>
                <FaPhone className="logoTel" size={40} color="white" onClick={clickLogoTel} />
                {showNumTel && <p className="numTel">03-21-00-00-00</p>}
            </div>
        </div>
      </>
    );
}

export default PageContact;
