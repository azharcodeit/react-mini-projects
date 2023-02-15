import React from "react";
import { useState } from "react";
import "../styles/quiz.css";
import data from "../data/QUESTIONS_ANSWERS.json";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    if (e.currentTarget.textContent === data[currentQuestion].correct) {
      setScore((prevValue) => prevValue + 1);
    }
    setCurrentQuestion((prevValue) => {
      if (prevValue + 1 < data.length) {
        return prevValue + 1;
      }
      setShowScore(true);
      return prevValue;
    });
  }

  return (
    <div className='app-wrapper'>
      <div className='app-container'>
        {showScore ? (
          <div className='score-container result'>
            You scored {score} out of {data.length}
          </div>
        ) : (
          <>
            <div className='question-container'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{data.length}
              </div>

              {data[currentQuestion].question}
            </div>
            <div className='answers-container'>
              {data[currentQuestion].answers.map((answer, index) => {
                return (
                  <button className="choice-button" onClick={handleClick} key={index}>
                    {answer}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
