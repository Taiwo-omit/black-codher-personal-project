import React from "react";
import { Link } from "react-router-dom";

const Height = ({ setHeight }) => {
  function myRequest(event) {
    setHeight(event.target.value);
  }
  return (
    <div>
      <h1>
        <b>HEIGHT</b>
      </h1>
      <label for="height">I am looking for...</label>
      <select onClick={(e) => myRequest(e)} name="height">
        <option value="5'4">Below 5"4</option>
        <option value="5'10">5"5 - 5"10</option>
        <option value="6'5">5"11 and over</option>
      </select> 

      <br />

      <div>
        <Link to="/Ethnicity">
          <button id="back">back</button>
        </Link>
        <Link to="/Results">
          (<button id="finish">Show Results</button>
        </Link>
      </div>
    </div>
  );
};

export default Height;
