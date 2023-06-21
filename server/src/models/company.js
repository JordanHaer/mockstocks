const mongoose = require("mongoose");

const { Schema } = mongoose;

const companySchema = new Schema({
  stockCode: String,
  companyName: String,
  description: String,
  homepage_url: String,
  total_employees: Number,
  list_date: String,
  address: {
    address1: String,
    city: String,
    state: String,
    postal_code: String,
  },
  currentPrices: { type: Array, default: [] },
  stockPriceHistory: { type: Array, default: [] },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
