import { useState, useEffect } from 'react';

export const useFetchHoraire = () => {
    const [disciplines, setDisciplines] = useState({});

    useEffect(() => {
        const fetchHoraire = async () => {
            try {
                const response = await fetch('https://127.0.0.1:8000/api/horaires');
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                const data = await response.json();
                const horaires = data['hydra:member'];
                console.log(horaires);

                const nomDiscipline = (url) => {
                    switch (url) {
                        case '/api/disciplines/1':
                            return 'moderne';
                        case '/api/disciplines/2':
                            return 'hip-hop';
                        case '/api/disciplines/3':
                            return 'zumba';
                        case '/api/disciplines/4':
                            return 'country';
                        default:
                            return '';
                    }
                  };

                  const nomGroupe = (url) => {
                    switch (url) {
                        case '/api/groupes/1':
                            return 'enfants';
                        case '/api/groupes/2':
                            return 'adolescents';
                        case '/api/groupes/3':
                            return 'adultes';
                        default:
                            return '';
                    }
                  };

                const regroupement = {};

                horaires.forEach(horaire => {
                    const discipline = nomDiscipline(horaire.horaire_discipline); // nom de la dicispline en fonction de l'url
                    const groupe = nomGroupe(horaire.horaire_groupe); // nom du groupe en fonction de l'url

                    if (!regroupement[discipline]) {
                        regroupement[discipline] = [];
                    }
                    regroupement[discipline].push({
                        nom_discipline: discipline,
                        horaire_groupe: groupe,
                        details: horaire.details,
                        jour: horaire.jour,
                        heure_debut: horaire.heure_debut,
                        heure_fin: horaire.heure_fin,
                    });
                });

                setDisciplines(regroupement);
                console.log(Object.values(disciplines))

            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchHoraire();
    }, []);

    return Object.values(disciplines);
};
