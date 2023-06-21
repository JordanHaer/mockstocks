const express = require("express");
const getCompanies = require("../../controllers/companies/GETCompanies.js");

const companiesRouter = express.Router();

companiesRouter.route("/companies").get(getCompanies);

module.exports = companiesRouter;
