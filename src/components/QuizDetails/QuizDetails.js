import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const quizes = useLoaderData().data;
  //console.log(quizes);
  return (
    <div>
      <h2>Quiz details:{quizes.name}</h2>
      <p>{quizes.questions.length}</p>
      {quizes.questions.map((ques) => (
        <Questions key={ques.id} ques={ques}></Questions>
      ))}
    </div>
  );
};

export default QuizDetails;
