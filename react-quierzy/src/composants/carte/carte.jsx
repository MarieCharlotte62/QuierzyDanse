import React, { useState } from 'react';
import { useFetchHoraire } from '../../fonctions/api/fetchDiscipline';

const Carte = ({nomDiscipline, horaires}) => {
    const [isChecked, setIsChecked] = useState(false);

    const expanded = () => {
        setIsChecked(!isChecked)
    };

    return (
        <div className="carte" onClick={expanded}>
            <div><img src={`images/discipline/${nomDiscipline}.webp`} alt="{nomDiscipline}" loading="lazy"/></div>
            <div className={`titreCarte ${isChecked ? 'expanded' : ''}`}><p>{nomDiscipline}</p>
            {isChecked && (
                <div className="informationsHoraires">
                    {horaires.map((horaire, index) => (
                    <div key={index} className='listeInfos'>
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
                <Carte key={index} nomDiscipline={discipline[0].nom_discipline} horaires={discipline}/>
            ))}
        </div>
    );
};

export default Cartes;
