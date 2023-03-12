const { Router } = require("express");
const express = require("express");

const rout = express.Router();

const controller = require("../controller/handlers");

rout.post("/add", controller.addData);
rout.get("/songs", controller.findAll);
rout.get("/song/:id", controller.FindOne);
rout.delete("/delete/:id", controller.deleteData);

rout.get("/update/:id", controller.updatePage);

rout.post("/change/:id", controller.change);

module.exports = rout;
