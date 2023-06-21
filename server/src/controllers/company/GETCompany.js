const Company = require("../../models/company.js");

const getCompany = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await Company.findById(id);
    res.json(company);
  } catch (error) {
    res.status(500).send("Error retreiving company");
  }
};

module.exports = getCompany;
