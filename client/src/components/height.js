import React from "react";
import { Link } from "react-router-dom";

const Height = ({ setHeight, getUsers}) => {
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
        <option value='5"3'>Below 5"3</option>
        <option value='5"6'>5"3 - 5"6</option>
        <option value='5"11'>5"7 - 5"11</option>
        <option value='7"0'>6" and over</option>
      </select>

      <br />

      <div>
      <Link to="/Ethnicity">
          <button id="back">back</button>
        </Link>
        <Link to="/Results">(
          <button id="finish" onClick={()=>getUsers()}>Show Results</button>
        </Link>
      </div>
    </div>
  );
};

export default Height;
