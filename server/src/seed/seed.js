const jsonData = require("./data.json");
const axios = require("axios");
const Company = require("../models/company.js");
const priceStringToNumber = require("../library/priceStringToNumber.js");

const getCompanyInfo = async (ticker) => {
  try {
    const api = await axios.get(
      `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${process.env.POLYGON_API_KEY}`
    );
    const companyInfo = api.data.results;
    try {
      await Company.create({
        stockCode: companyInfo.ticker,
        companyName: companyInfo.name,
        description: companyInfo.description,
        homepage_url: companyInfo.homepage_url,
        total_employees: companyInfo.total_employees,
        list_date: companyInfo.list_date,
        address: {
          address1: companyInfo.address.address1,
          city: companyInfo.address.city,
          state: companyInfo.address.state,
          postal_code: companyInfo.address.postal_code,
        },
      });
    } catch (error) {
      console.log(`Error, could not create database entry for ${ticker}`);
    }
    console.log(`Success, ${ticker} stored in mongodb`);
  } catch (error) {
    console.log(`Error, could not get data for ${ticker}`);
  }
};

const getCompanyStockPriceHistory = async (ticker) => {
  try {
    const api = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    const companyInfo = api.data;
    const stockPriceHistory = [];
    for (const date in companyInfo["Weekly Adjusted Time Series"]) {
      stockPriceHistory.unshift({
        date: date,
        closePrice: priceStringToNumber(companyInfo["Weekly Adjusted Time Series"][date]["5. adjusted close"]),
      });
    }
    try {
      await Company.findOneAndUpdate({ stockCode: ticker }, { $set: { stockPriceHistory: stockPriceHistory } });
    } catch (error) {
      console.log(`Error, could not add price history to mongodb for ${ticker}`);
    }
    console.log(`Success, ${ticker} price history added in mongodb`);
  } catch (error) {
    console.log(`Error, could not get price data for ${ticker}`);
  }
};

const seedCompany = () => {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < jsonData.length) {
      const ticker = jsonData[i].stockCode;
      // getCompanyInfo(ticker)
      getCompanyStockPriceHistory(ticker);
      i++;
    } else {
      clearInterval(intervalId);
      console.log("the end");
    }
  }, 15000);
};

 module.exports = seedCompany;
