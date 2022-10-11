import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between mx-8 text-center my-8">
      <div>
        <h2 className="font-bold text-3xl text-blue-700">MyQuiz</h2>
      </div>
      <div className="mx-4">
        <Link className="text-xl mx-3  text-blue-700" to="/">
          Home
        </Link>
        <Link className="text-xl mx-3  text-blue-700" to="/quiz">
          Quiz
        </Link>
        <Link className="text-xl mx-3  text-blue-700" to="/blog">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
