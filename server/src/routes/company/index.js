const express = require("express");
const getCompany = require("../../controllers/company/GETCompany.js");

const companyRouter = express.Router();

companyRouter.route("/company/:id").get(getCompany);

module.exports = companyRouter;
