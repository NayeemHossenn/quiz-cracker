import React from "react";
import { useRouteError } from "react-router-dom";

const Errors = () => {
  const error = useRouteError();
  return (
    <div>
      <h2 className="text-3xl text-red-600">An error Occured!!!!!</h2>
      {error && (
        <div>
          <p className="text-2xl text-red-300">
            {error.statusText || error.message}
          </p>
          <p className="text-2xl text-red-300">{error.status}</p>
        </div>
      )}
    </div>
  );
};

export default Errors;
