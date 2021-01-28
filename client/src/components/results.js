import React, { useState , useEffect} from "react";
import axios from "axios";

const getUsers = async (gender, ethnicity, height) => {
  console.log(gender, ethnicity, height);
  let res = await axios.get(`http://localhost:5000/api/candidates`, {
    params: { gender, ethnicity, height },
  });
  console.log(res);
  console.log(res.data);
return res.data;
};

const Results = (props) => {
  const [candidates, setCandidates] = useState("");
  console.log(props);
 console.log(props.gender, props.ethnicity, props.height);

 const getCandidates = async () => {
   const temp = await getUsers(props.gender, props.ethnicity, props.height);
  console.log(temp);
  setCandidates(temp)
 }
 useEffect(() => {
  if (!candidates) {
    getCandidates();
  }
});

  

  // Nested Destructuring
  return (
    <>
      {!candidates ? (
        <h2>No Results</h2>
      ) : (
        candidates.map((result) => {
          return (
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
          )
        }
        )
      )}
    </>
  );
};


export default Results;