/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getAll: async (gender, ethnicity, height) => {
     console.log(gender, ethnicity, height)
    const res = await axios.get(`http://localhost:5000/api/candidates`, {params: {gender, ethnicity, height}}
    );
    console.log(res)
  console.log(res.data)
    return res.data || [];
  },
};
