const Users = require("../models/UserModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("Plese fill in the required fields");
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new Users({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill in the required fields" });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({
        message: "Login successful!",
        token,
        user: { name: user.name, email: user.email },
      });
  } catch (err) {
    console.log(err);
  }
};

const getUserDetails = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { signUp, login };
