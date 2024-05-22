import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Question = ({ question, reponse }) => {
    const [isChecked, setIsChecked] = useState(false);

    const expanded = () => {
        setIsChecked(!isChecked)
    };

    return (
        <div className="questionReponse">
            <div className="question" onClick={expanded}>
                <p>{question}</p>
                {isChecked ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {(isChecked && (
            <div className="reponse">
                <p>{reponse}</p>
            </div>))}
        </div>
    );
};

export default Question;