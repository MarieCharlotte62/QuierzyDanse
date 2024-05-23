import React from 'react';

const PageErreur = () => {
  return (
    <div className="containerErreur">
      <h2 className='titreErreur'>404</h2>
      <h2 className='pageIntrouvable'>Désolé, page introuvable</h2>
      <p>La page que vous avez demandée est introuvable</p>
      <button onClick={() => window.location.href = '/'}>RETOURNER À L'ACCUEIL</button>
    </div>
  );
}

export default PageErreur;
