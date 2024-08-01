import React, { useState, useEffect } from 'react';
import { useFetchHoraire } from '../../fonctions/api/fetchDiscipline';

const Carte = ({ nomDiscipline, horaires }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className="carte"
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img
          src={`images/discipline/${nomDiscipline}.webp`}
          alt={nomDiscipline}
          loading="lazy"
        />
      </div>
      <div className={`titreCarte ${isExpanded ? 'expanded' : ''}`}>
        <p>{nomDiscipline}</p>
        {isExpanded && (
          <div className="informationsHoraires">
            {horaires.map((horaire, index) => (
              <div key={index} className="listeInfos">
                <p>
                  Groupe : {horaire.horaire_groupe || ''} {horaire.details || ''} <br />
                  Horaires: {horaire.jour} de {new Date(horaire.heure_debut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} à {new Date(horaire.heure_fin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Cartes = () => {
  const disciplines = useFetchHoraire();

  return (
    <div className="cartes">
      {disciplines.map((discipline, index) => (
        <Carte key={index} nomDiscipline={discipline[0].nom_discipline} horaires={discipline} />
      ))}
    </div>
  );
};

export default Cartes;
