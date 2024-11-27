const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoute.js");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongodb successfully"))
  .catch((err) => console.log("Error connecting to mongodb", err));

app.use(UserRouter);
app.listen(port, () => {
  console.log("Server is running on port", port);
});
