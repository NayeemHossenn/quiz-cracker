import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const quizes = useLoaderData().data;
  const [value, setValue] = useState("");
  //const [answer, setAnswer] = useState("");
  //quizes.questions.map((sq) => setValue(sq.correctAnswer));
  //console.log(value);
  //   const answers = quizes.questions[0].correctAnswer;
  //   const answers1 = quizes.questions[1].correctAnswer;
  //   const answers2 = quizes.questions[2].correctAnswer;
  //   const answers3 = quizes.questions[3].correctAnswer;
  //   const answers4 = quizes.questions[4].correctAnswer;
  //   const answers5 = quizes.questions[5].correctAnswer;
  //   const answers6 = quizes.questions[6].correctAnswer;
  //   const answers7 = quizes.questions[7].correctAnswer;

  const questionClick = (e) => {
    setValue(e.target.innerText);
    // if (e.target.innerText === answers) {
    //   alert("correct");
    // } else if (e.target.innerText === answers1) {
    //   alert("correct");
    // } else if (e.target.innerText === answers2) {
    //   alert("correct");
    // } else if (e.target.innerText === answers3) {
    //   alert("correct");
    // } else if (e.target.innerText === answers4) {
    //   alert("correct");
    // } else if (e.target.innerText === answers5) {
    //   alert("correct");
    // } else if (e.target.innerText === answers6) {
    //   alert("correct");
    // } else if (e.target.innerText === answers7) {
    //   alert("correct");
    // }
  };

  //console.log(quizes);
  return (
    <div>
      <h2 className="text-xl font-bold">Quiz details:{quizes.name}</h2>

      {quizes.questions.map((ques) => (
        <Questions
          key={ques.id}
          ques={ques}
          questionClick={questionClick}
          value={value}
        ></Questions>
      ))}
    </div>
  );
};

export default QuizDetails;
