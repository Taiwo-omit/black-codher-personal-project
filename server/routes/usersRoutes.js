const mongoose = require("mongoose");
const User = mongoose.model("candidates");

module.exports = (app) => {
  //GET /api/user (CRUD -> READ)
  app.get(`/api/candidates`, async (req, res) => {
    console.log(req.query);
    let gender = req.query.gender;
    let ethnicity = req.query.ethnicity;
   let height = req.query.height;

   console.log(gender, ethnicity)

    let persons = await User.find({
      gender: gender,
      ethnicity: ethnicity,
      height: height,
    });

    return res.status(200).send(persons);
  });
  app.get(`/api/candidatez`, async (req, res) => {
    console.log(req.body);

    let persons = await User.find();

    return res.status(200).send(persons);
  });
};
