import React, { useState } from "react";
import Quiz from "./Quiz/Quiz";
import "./Question.css";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../Library/QuestionData";

const Question = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handlesubmit = () => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: QuestionData[index].question, selectedOption },
    ]);

    const nextIndex = index + 1;
    if (nextIndex < QuestionData.length) {
      setIndex(nextIndex);
      setSelectedOption(null);
    } else {
      console.log("Quiz completed", answers);
      navigate("/thankyou");
    }
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="question-sec">
          <h2 className="que-ans">Answer the Questions</h2>
          <Quiz
            key={index}
            questionNo={index + 1}
            question={QuestionData[index].question}
            options={QuestionData[index].options}
            isLast={index + 1 === QuestionData.length}
            handleSubmit={handlesubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
