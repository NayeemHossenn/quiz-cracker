import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="border border-gray-300 rounded-lg p-2">
      <img className="w-[250px] bg-black" src={logo} alt="" />
      <div className="flex gap-4 mt-2 justify-around">
        <p className="font-bold">{name}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white  px-2 rounded">
          <Link to={`/quiz/${id}`}>
            {" "}
            Start Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Topic;
