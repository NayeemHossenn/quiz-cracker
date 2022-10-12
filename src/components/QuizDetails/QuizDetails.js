import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const quizes = useLoaderData().data;
  const [value, setValue] = useState("");

  const questionClick = (e) => {
    setValue(e.target.innerText);
  };

  return (
    <div>
      <div className="bg-gray-200 ">
        <h2 className="text-xl font-bold">Quiz details:{quizes.name}</h2>{" "}
        {quizes.questions.map((ques) => (
          <Questions
            key={ques.id}
            ques={ques}
            questionClick={questionClick}
            value={value}
          ></Questions>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
