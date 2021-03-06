import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.jpg";


// SERVICES
//import userService from "./services/userService";
import Gender from "./components/gender";
import Ethnicity from "./components/ethnicity";
import Height from "./components/height";
import Results from "./components/results";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [height, setHeight] = useState("");
  const [results, setResults] = useState("");

console.log("hey");

  console.log(gender);
  console.log(ethnicity);
  console.log(height);
  console.log(results);

  return (
    <>
      <Router>
        <div>
          <img src={logo} alt="Logo" height={100} width={100} />
          <h1>POSE</h1>
          <Link to="/Gender">
            <button id="search">Start Search</button>
          </Link>
        </div>

        <Route
          exact
          path="/Ethnicity"
          render={() => (
            <>
              <Ethnicity setEthnicity={setEthnicity} />
            </>
          )}
        />
        <Route
          exact
          path="/Gender"
          render={() => (
            <>
              <Gender setGender={setGender} />
            </>
          )}
        />
        <Route
          exact
          path="/Height"
          render={() => (
            <>
              <Height setHeight={setHeight} />
            </>
          )}
        />
        <Route
          exact
          path="/Results"
          render={() => (
            <>
              <Results gender={gender} ethnicity={ethnicity} height={height}
 />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
