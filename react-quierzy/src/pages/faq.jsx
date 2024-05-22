import Question from "../composants/question/question";

function PageFaq() {

    return (
      <>
        <div className="containerFaq">
            <div className="titreFaq">
                <h2>Découvrez les réponses à vos questions fréquntes</h2>
            </div>

            <div className="questionsReponses">
                <Question question="question 1" reponse="réponse à la question 1"/>
                <Question question="question 2" reponse="réponse à la question 2"/>
                <Question question="question 3" reponse="réponse à la question 3"/>
                <Question question="question 4" reponse="réponse à la question 4"/>
                <Question question="question 5" reponse="réponse à la question 5"/>
            </div>
        </div>
      </>
    );
  }
  
  export default PageFaq;