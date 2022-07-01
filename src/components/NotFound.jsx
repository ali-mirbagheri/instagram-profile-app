import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="not-found">
      <div>
        <h1>your page not found</h1>
        <Link to="/">
          <div className="not-found__button">click here to go home</div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
