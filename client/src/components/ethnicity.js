import React from "react";
import { Link } from "react-router-dom";

const Ethnicity = ({ setEthnicity }) => {
  function myRequest(event) {
    setEthnicity(event.target.value);
  }
  return (
    <div>
      <h1>
        <b>ETHNICITY</b>
      </h1>

      <form>
        <input
          type="radio"
          value="black"
          id="group1"
          name="ethnicity"
          onChange={(e) => myRequest(e)}
        />
        <label for="group1">Black</label>
        <br />
        <input
          type="radio"
          value="white"
          id="group2"
          name="ethnicity"
          onChange={(e) => myRequest(e)}
        />
        <label for="group2">White</label>
        <br />

        <input
          type="radio"
          value="latino"
          id="group3"
          name="ethnicity"
          onChange={(e) => myRequest(e)}
        />
        <label for="group3">Latino</label>
        <br />

        <input
          type="radio"
          value="asian"
          id="group4"
          name="ethnicity"
          onChange={(e) => myRequest(e)}
        />
        <label for="group4">Asian</label>
        <br />
      </form>

      <br />

      <div>
    
        <Link to="/Gender">
          <button id="back">back</button>
        </Link>
        <Link to="/Height">
          <button id="skip">skip</button>
        </Link>
        <Link to="/Height">
          <button id="next">next</button>
        </Link>
      </div>
      </div>
 
  );
};

export default Ethnicity;
