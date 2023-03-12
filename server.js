const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const route = require("./routes/route");
require("dotenv").config();
const { response } = require("express");

const app = express();

mongoose
  .connect(process.env.mongo_url)
  .then(console.log("connection made"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.static("../client/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(route);

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log(" listening on port  ", process.env.PORT);
});
