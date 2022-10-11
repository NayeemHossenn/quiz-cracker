import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between mx-8 text-center my-8">
      <div>
        <h2 className="font-bold text-3xl text-blue-700">MyQuiz</h2>
      </div>
      <div className="mx-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl mx-3  text-red-500"
              : " text-xl mx-3 text-blue-700"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl mx-3  text-red-500"
              : " text-xl mx-3 text-blue-700"
          }
          to="/quiz"
        >
          Quiz
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl mx-3  text-red-500"
              : " text-xl mx-3 text-blue-700"
          }
          to="/blog"
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
