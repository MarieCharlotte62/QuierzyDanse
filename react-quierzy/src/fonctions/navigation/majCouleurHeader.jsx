const majCouleurHeader = () => {
    const pageActuelle = window.location.hash.substring(1);
    const pageAccueil = document.querySelector('.navTextAccueil');
    const pageDiscipline = document.querySelector('.navTextDisciplines');
    const pageProfesseur = document.querySelector('.navTextProfesseurs');
    const pageFaq = document.querySelector('.navTextFaq');
    const pageContact = document.querySelector('.navTextContact');

    console.log(pageAccueil);

    pageAccueil.classList.remove('activeAccueil');
    pageDiscipline.classList.remove('activeDiscipline');
    pageProfesseur.classList.remove('activeProfesseur');
    pageFaq.classList.remove('activeFaq');
    pageContact.classList.remove('activeContact');

    if (pageActuelle === 'accueil') {
        pageAccueil.classList.add('activeAccueil')
    } else if (pageActuelle === 'discipline') {
        pageDiscipline.classList.add('activeDiscipline')
    } else if (pageActuelle === 'professeur') {
        pageProfesseur.classList.add('activeProfesseur')
    } else if (pageActuelle === 'faq') {
        pageFaq.classList.add('activeFaq')
    } else if (pageActuelle === 'contact') {
        pageContact.classList.add('activeContact')
    }
}
export default majCouleurHeader;