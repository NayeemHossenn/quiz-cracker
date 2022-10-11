import React from "react";

const Topic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="border border-gray-300 rounded-lg p-2">
      <img className="w-[250px] bg-black" src={logo} alt="" />
      <div className="flex gap-4 mt-2 justify-around">
        <p className="font-bold">{name}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white  px-2 rounded">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Topic;
