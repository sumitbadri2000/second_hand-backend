const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: Number, required: true },
  },
  { versionKey: false }
);

const LoginModel = mongoose.model("login", loginSchema);

module.exports = { LoginModel };
