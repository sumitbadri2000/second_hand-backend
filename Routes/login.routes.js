const express = require("express");
const { LoginModel } = require("../Models/login.model.");
const LoginRouter = express.Router();

LoginRouter.get("/", async (req, res) => {
    try {
        const gets = await LoginModel.find()
        res.send(gets);
    } catch (error) {
        res.send({msg:"no data",error:error});
    }
  });

LoginRouter.post("/newUser", async (req, res) => {
  try {
    const logins = new LoginModel(req.body);
    await logins.save();
    res.send({ msg: "create new user" });
  } catch (error) {
    res.send({ msg: "something is missing",error:error});
  }
});

module.exports = { LoginRouter };
