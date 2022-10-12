import React from "react";

const Blogs = () => {
  return (
    <div className=" items-center text-center mx-4 p-4 border border-sky-500">
      <div>
        <h2 className="text-3xl text-orange-500">
          what is the perpous of react router?
        </h2>
        <p className="text-yellow-700">
          React Router is a JavaScript library used to handle client and
          server-side routing in React applications. It allows the creation of
          single-page web or mobile apps that allows navigation without the page
          refreshing. React Router also gives us access to browser history
          features while maintaining the correct view of the application.React
          Router uses a component-based approach to routing. It provides
          different routing components as needed by the application.
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-orange-500">How does context api works</h2>
        <p className="text-yellow-700">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.Context API is a (kind of) new feature
          added in version 16.3 of React that allows one to share state across
          the entire app (or part of it) lightly and with ease.
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-orange-500">what is useref in react?</h2>
        <p className="text-yellow-700">
          The useRef Hook is a function that returns a mutable ref object whose
          .current property is initialized with the passed argument
          (initialValue). The returned object will persist for the full lifetime
          of the component.useRef is like a “box” that can hold a mutable value
          in its .current property.There are two main uses of useRef . Accessing
          the DOM nodes or React elements and keeping a mutable variable.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
