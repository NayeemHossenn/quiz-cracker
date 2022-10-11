import React from "react";

const Questions = ({ ques }) => {
  const { options, id, question, correctAnswer } = ques;
  return (
    <div>
      <p>{options}</p>
      <p>{question}</p>
      <p>{correctAnswer}</p>
    </div>
  );
};

export default Questions;
