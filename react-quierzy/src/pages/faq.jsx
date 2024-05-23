import { useState } from "react";
import Question from "../composants/question/question";

function PageFaq() {
  const [openQuestion, setOpenQuestion] = useState(null)

    const questionClick = (id) => {
        setOpenQuestion(id === openQuestion ? null : id);
    };

    return (
      <>
        <div className="containerFaq">
            <div className="titreFaq">
                <h2>Découvrez les réponses à vos questions fréquentes</h2>
                <img src="/images/faq/chaussures.png" alt="paire de chaussure" />
            </div>

            <div className="questionsReponses">
                <Question question="Quand débutent les inscriptions ?" reponse="réponse à la question 1" isChecked={openQuestion === 0} onClick={() => questionClick(0)} />
                <Question question="Proposez-vous des essais gratuit ?" reponse="réponse à la question 2" isChecked={openQuestion === 1} onClick={() => questionClick(1)} />
                <Question question="Quels sont vos tarifs ?" reponse="réponse à la question 3" isChecked={openQuestion === 2} onClick={() => questionClick(2)}/>
                <Question question="Puis-je avoir une réduction si je m'inscris à plusieurs disciplines ?" reponse="réponse à la question 4" isChecked={openQuestion === 3} onClick={() => questionClick(3)}/>
                <Question question="Puis-je m'inscrire en cours de saison ?" reponse="réponse à la question 5" isChecked={openQuestion === 4} onClick={() => questionClick(4)} />
            </div>
        </div>
      </>
    );
  }
  
  export default PageFaq;
