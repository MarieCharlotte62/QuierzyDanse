import Questions from "../composants/question/question";

function PageFaq() {

    return (
      <>
        <div className="containerFaq">
            <div className="titreFaq">
                <h2>Découvrez les réponses à vos questions fréquentes</h2>
                <img src="/images/faq/chaussures.webp" alt="paire de chaussure" loading="lazy" />
            </div>

            <Questions/>

        </div>
      </>
    );
  }
  
  export default PageFaq;
