import React from "react";
import { Link } from "react-router-dom";

const Gender = ({ setGender }) => {
  function myRequest(event) {
    setGender(event.target.value);
  }
  return (
    <div>
      <h1>
        <b>WEIGHT</b>
      </h1>
      <h3>I am looking for...</h3>
      <h4>50kg - 60kg</h4>
      <h4>61kg - 70kg</h4>
      <h4>71kg - 80kg</h4>

      <br/>

     {/* <div>
        <Link to="/Ethnicity">
          <button id="back">back</button>
        </Link>
        <Link to="/Results">
          (<button id="finish">Show Results</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Weight;
