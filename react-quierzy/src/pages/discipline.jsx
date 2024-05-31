import Cartes from "../composants/carte/carte";

function PageDiscipline() {

    return (
      <>
        <div className="containerDiscipline">
          <div className="titreDiscipline"><h2>Nous vous proposons différentes disciplines</h2></div>
          <div className="composantCarte"><Cartes/></div>
        </div>
      </>
    );
  }
  
  export default PageDiscipline;