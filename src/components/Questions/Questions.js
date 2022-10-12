import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ ques, questionClick, value }) => {
  const { options, id, question, correctAnswer } = ques;
  console.log(value);
  const customId = "custom-id-yes";
  if (value === correctAnswer) {
    toast.success("Correct Answer!", {
      toastId: customId,
      position: "top-center",
      autoClose: 2000,
    });
  }

  const showAnswer = (correctAnswer) => {
    toast.success(correctAnswer, { position: "top-center", autoClose: 3000 });
  };
  return (
    <div className="w-[70%] p-4">
      <br />
      <div className="flex justify-between">
        <p className="text-xl my-3">{question}</p>
        <button onClick={() => showAnswer(correctAnswer)}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
        <ToastContainer />
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
