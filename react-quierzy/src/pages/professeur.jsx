import Presentations from "../composants/presentation/presentation";

function PageProfesseur() {
    return (
      <>
        <div className="containerProfesseur">
            <div className="professeurs"><Presentations/></div>

            <div className="titrePresentation">
                <h2>Présentation des professeurs</h2>
            </div>
        </div>
      </>
    );
  }
  
  export default PageProfesseur;