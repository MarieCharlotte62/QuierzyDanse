// import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Question = ({ question, reponse, isChecked, onClick }) => {

    return (
        <div className="questionReponse" onClick={onClick}>
            <div className="question">
                <p>{question}</p>
                {isChecked ? <FaChevronUp size={30} color="#5f92a6"/> : <FaChevronDown size={30} color="#5f92a6"/>}
            </div>

            {(isChecked && (
            <div className="reponse">
                <p>{reponse}</p>
            </div>))}
        </div>
    );
};

export default Question;