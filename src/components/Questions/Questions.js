import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Questions = ({ ques, questionClick, value }) => {
  const { options, id, question, correctAnswer } = ques;
  console.log(value);
  if (value === correctAnswer) {
    alert("correct answer");
  }
  const showAnswer = (correctAnswer) => {
    alert(correctAnswer);
  };
  return (
    <div className="w-[70%] p-4">
      <br />
      <div className="flex justify-between">
        <p className="text-xl my-3">{question}</p>
        <button onClick={() => showAnswer(correctAnswer)}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>
      {options.map((option) => (
        <p
          className=" mx-8 border border-sky-500 w-[80%] p-2 cursor-pointer hover:bg-sky-300"
          onClick={(e) => questionClick(e)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default Questions;
