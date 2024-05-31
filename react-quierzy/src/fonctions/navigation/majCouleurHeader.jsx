/**
 * Met à jour la couleur du header en fonction de la page actuelle.
 *
 * Cette fonction vérifie le hash dans l'URL pour déterminer la page actuelle.
 * Elle parcourt ensuite un tableau d'éléments de navigation, en retirant
 * la classe 'active' de chacun. Enfin, elle ajoute la classe 'active'
 * à l'élément correspondant à la page actuelle.
 */
const majCouleurHeader = () => {
    const pageActuelle = window.location.hash.substring(1);
    const pages = [
        { section: 'accueil', element: document.querySelector('.navTextAccueil') },
        { section: 'discipline', element: document.querySelector('.navTextDisciplines') },
        { section: 'professeur', element: document.querySelector('.navTextProfesseurs') },
        { section: 'faq', element: document.querySelector('.navTextFaq') },
        { section: 'contact', element: document.querySelector('.navTextContact') }
    ];

    pages.forEach(page => page.element.classList.remove('active'));

    pages.forEach(page => {
        if (page.section === pageActuelle) {
            page.element.classList.add('active');
        }
    });
};

export default majCouleurHeader;

