import React, { useState } from "react";

const Results = ({ candidates }) => {
  console.log(candidates);
 
const answer = []
//   const answer = candidates.find(
//     {
//       $and: [{ gender: gender }, { ethnicity: ethnicity }, { height: height }],
//     },
//     { image: 1, name: 1, age: 1, location: 1 }
//   );

//   const Results = ({ setResults }) => {
//       function myRequest(event) {
//         setResults(event.target.value);
//       }

  // Nested Destructuring
  return (
    <>
      {!candidates ? (
        <h2>No Results</h2>
      ) : (
        candidates.map((result) => (
          <div className="image">
            <img
              src={result.image}
              alt={result.name}
            />
            <h2>
              {result.name.length > 50 ? result.name.substring(0, 50) : result.name}
            </h2>
            <p className="age">{result.age ? result.age.substring(0, 30) : "Age Unknown"}</p>
            <p className="location">
              {result.location ? result.location.substring(0, 30) : "Location Unknown"}
            </p>
          </div>
        ))
      )}
    </>
  );
};
export default Results
