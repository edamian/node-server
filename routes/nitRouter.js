const express = require("express");
const rtuRouter = express.Router();
const nitController = require("../controllers/nitController");

rtuRouter.get("/", nitController.findAll);

rtuRouter.get("/:nit", nitController.findByNIT);

module.exports = rtuRouter;