import { useState, useEffect } from 'react';

/**
 * Ce composant récupère et gère les données des professeurs depuis le serveur backend.
 * Il utilise le Hook `useState` pour maintenir l'état des données des professeurs et `useEffect`
 * pour effectuer la requête de récupération des données au montage du composant.
 */
export const useFetchProfesseurs = () => {
    const [professeursData, setProfesseursData] = useState([]);

    useEffect(() => {
        const fetchProfesseurs = async () => {
            try {
                const response = await fetch('https://127.0.0.1:8000/api/professeurs');
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                const data = await response.json();
                setProfesseursData(data['hydra:member']);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchProfesseurs();
    }, []);

    return { professeursData };
};
