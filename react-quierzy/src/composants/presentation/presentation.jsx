import React from 'react';
import { useFetchProfesseurs } from '../../fonctions/api/fetchProfesseur';

const Presentation = ({ textePresentation, nomImage }) => {
    return (
        <div className="presentation">
            <img src={`https://127.0.0.1:8000/images/professeurs/${nomImage}`} alt="professeur de danse" loading="lazy"/>
            <p className="textePresentation">{textePresentation}</p>
        </div>
    );
};

const Presentations = () => {
    const {professeursData} = useFetchProfesseurs();

    return (
        <div className='presentations'>
            {professeursData.map((professeur, index) => (
                <Presentation key={index} textePresentation={professeur.presentation} nomImage={professeur.nom_photo}/>
            ))}
        </div>
    );
};

export default Presentations;