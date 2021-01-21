import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gender = ({ setGender }) => {
  function myRequest(event) {
    setGender(event.target.value);
  }
  return (
    <div>
      <h1>
        <b>GENDER</b>
      </h1>
      <Link to="/Ethnicity">
      <button onClick={(e) => myRequest(e)} id="male" value="male">
        male
      </button>
      </Link>
      <Link to="/Ethnicity">
      <button onClick={(e) => myRequest(e)} id="female" value="female">
        female
      </button>
      </Link>
      <br />

      <div>
        <Link to="/Ethnicity">
          <button id="skip">skip</button>
        </Link>
      </div>
    </div>
  );
};

export default Gender;
