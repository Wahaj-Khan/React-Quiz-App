import React, { useState } from 'react';
import { quiz } from '../../constant/quizMaterial';
import Button from '../Button/Button';

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextQuestion = () => {
    if (selectedAnswerIndex != null) {
      if (quiz[currentQuestionIndex].answers[selectedAnswerIndex].isCorrect) {
        setNoOfCorrectAnswers(prevCount => prevCount + 1);
      }
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswerIndex(null)
    }

  };
  const handleAnswerSelect = (index) => {
    if (selectedAnswerIndex == null) {
      setSelectedAnswerIndex(index);
    }
  }
  const handleSubmit = () => {
    if (selectedAnswerIndex != null) {
      if (quiz[currentQuestionIndex].answers[selectedAnswerIndex].isCorrect) {
        setNoOfCorrectAnswers(prevCount => prevCount + 1);
      }
      setIsSubmitted(true)
    }
  }

  const currentQuestion = quiz[currentQuestionIndex];
  if (isSubmitted) {
    return (
      <div className="flex w-full h-4/5 justify-center items-center">
        <h1 className="font-bold text-3xl text-[#ffff] ml-4">You got
        <span className={`${noOfCorrectAnswers >= 2 ? 'text-green-600' : 'text-red-600' }`}> {noOfCorrectAnswers} </span>  
        marks</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center flex-col w-full mx-0 mt-20">
        <h1 className="font-bold max-sm::text-2xl text-3xl text-[#ffff] mx-4">{currentQuestion.question}</h1>
        <ul className='w-5/6' >
          {currentQuestion.answers.map((answer, index) => (
            <li className={`font-semibold text-xl max-md:text-base text-[#ffff] rounded-2xl mt-8 max-md:p-4 p-8 duration-300 cursor-pointer ${selectedAnswerIndex === index
              ? answer.isCorrect
                ? 'bg-green-600'
                : 'bg-red-600'
              : 'bg-slate-900 hover:translate-y-[3px] hover:shadow-md hover:shadow-green-500'
              }`}
              key={index}
              onClick={() => handleAnswerSelect(index)}
            >
              {answer.text}

            </li>
          ))}
        </ul>
        <h1>{noOfCorrectAnswers}</h1>
      </div>

      {currentQuestionIndex < quiz.length - 1 ? (
        <Button onClick={handleNextQuestion} btnText={"Next"} />
      ) : (
        <Button onClick={handleSubmit} btnText={"Submit"} />
      )}
    </>

  );
};

export default Question