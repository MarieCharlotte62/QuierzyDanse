import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { useFetchImageAccueil } from '../fonctions/api/fetchImageAccueil';

function PageAccueil() {
    const nomImage = useFetchImageAccueil();

    return (
      <>
        <div className="containerAccueil">
            <div className="backgroundAccueil"></div>

            <div className="titreAccueil">
                <h1>Notre association sportive, club de danse de Quierzy, vous souhaite la bienvenue.</h1>
            </div>

            <div className="photoAccueil">
            <img src={`https://127.0.0.1:8000/images/accueil/${nomImage}`} alt="groupe de danse" />
            </div>

            <div className="informationsAccueil">
                <div className="structureSite">
                    <p>Découvrez nos danse, consultez notre FAQ pour obtenir des informations rapidement, et n'hésitez pas à prendre contact avec nous pour des informations supplémentaires.</p>
                </div>

                <div className="appelFacebook">
                    <p>Pour tout savoir sur nos événements à venir, rendez-vous sur notre groupe Facebook 
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} color="white" /></a></p>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default PageAccueil;