import React, { useState } from "react";

const Quiz = ({ questionNo, question, options = [], isLast, handleSubmit }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    // if (selectedOption == null) { // if user clicks on one option then the answer cannot be changed
      setSelectedOption(option);
    // }
  };

  return (
    <div className="quiz-question">
      <h2>
        {questionNo}. {question}
      </h2>
      <ul>
        {options.map((option) => (
          <li
            key={option} // Ensure each item has a unique key
            onClick={() => handleOptionClick(option)}
            className={`option ${selectedOption === option ? "selected" : ""}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        className="otp-btn"
        onClick={handleSubmit}
        disabled={!selectedOption}
      >
        {isLast ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;


