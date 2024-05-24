import React, { useState, useEffect } from 'react';
import { Formulaire } from "../composants/formulaire/formulaire";
import { FaFacebook, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

function PageContact() {
    const [showNumTel, setShowNumTel] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [width, setWidth] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
      }

    useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const clickLogoTel = () => {
        setShowNumTel(!showNumTel);
    };

    const clickLogoMap = () => {
        if (width <= 1024) {
            setShowMap(!showMap);
        }
    };

    return (
      <>
        <div className="containerContact">
            <div className="formulaire">
                <h2 className="titreContact">contact</h2>
                <Formulaire />
            </div>

            <div className="renseignements">
                {showMap | width > 1024 && <div className='map'></div>}
            </div>

            <div className="logos">
                {width <= 1024 && <FaMapMarkedAlt className='logoMap' size={50} color="white" onClick={clickLogoMap}/>}
                <a className="logoFb" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={50} color="white" /></a>
                <FaPhone className="logoTel" size={40} color="white" onClick={clickLogoTel} />
                {showNumTel && <p className="numTel">03-21-00-00-00</p>}
            </div>
        </div>
      </>
    );
}

export default PageContact;
