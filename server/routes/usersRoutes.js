const mongoose = require("mongoose");
const User = mongoose.model("candidates");

module.exports = (app) => {
  //GET /api/user (CRUD -> READ)
  app.get(`/api/candidates`, async (req, res) => {
    console.log("req.query", req.query);
    let gender  = req.query.gender;
    let ethnicity = req.query.ethnicity;
    let height = req.query.height;

    console.log("query outcomes", gender, ethnicity, height);

    let persons = await User.find({
      gender: gender.toString(),
      ethnicity: ethnicity.toString(),
      height: height.toString()
        });

    console.log("person expecting back", persons);

    return res.status(200).send(persons);
  });
  app.get(`/api/candidatez`, async (req, res) => {
    console.log(req.body);

    let persons = await User.find();

    return res.status(200).send(persons);
  });

  app.get(`/api/user`, async (req, res) => {
    const persons = await User.find();
    return res.status(200).send(persons);
  }); 
};
