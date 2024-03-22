const mongoose = require("mongoose");

const authUser = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    height:{type:String},
    weight:{type:String},
    gender:{type:String},
  },
  {
    collection: "Users",
  }
);

const model = mongoose.model("Users", authUser);

module.exports = model;