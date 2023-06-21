const Company = require("../../models/company.js");

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.aggregate([
      {
        $project: {
          _id: 1,
          stockCode: 1,
          companyName: 1,
          stockPrice: {
            $slice: ["$currentPrices", -1],
            $slice: ["$currentPrices", -2],
          },
        },
      },
    ]);
    res.json(companies);
  } catch (error) {
    res.status(500).send("Error retrieving companies");
  }
};

module.exports = getCompanies;
