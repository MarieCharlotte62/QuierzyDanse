import { useState, useEffect } from 'react';

export const useFetchImageAccueil = () => {
  const [imageAccueil, setImageAccueil] = useState('');

  useEffect(() => {
    const fetchImageAccueil = async () => {
      try {
        const response = await fetch('https://127.0.0.1:8000/api/image_accueils');
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        const data = await response.json();
        setImageAccueil(data['hydra:member'][0].nom_image);
      } catch (error) {
        console.error('erreur lors de la récupération de données', error);
      }
    };

    fetchImageAccueil();
  }, []);

  return imageAccueil;
};