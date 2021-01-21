const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  rating: String,
  alternative_name: String,
});

mongoose.model("candidates", userSchema);
