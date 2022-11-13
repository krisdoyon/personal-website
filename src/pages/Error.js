import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="error__container">
        <h2 className="heading-secondary">ERROR</h2>
        <p className="error__text">Sorry...couldn't find that page :( </p>
        <Link to="/" className="btn btn--orange btn-home">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Error;
