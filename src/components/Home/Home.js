import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div>
      <div className="flex items-center justify-center w-[80%] rounded-lg p-2 mt-8">
        <h2 className="font-bold text-3xl w-[30%]">
          Assessment And Practice Beyond multiple choice
        </h2>
        <img
          className="w-[50%]"
          src="https://www.wpkube.com/wp-content/uploads/2016/12/viral-quizzes.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-4 justify-center mt-8">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
