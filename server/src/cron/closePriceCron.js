const cron = require("node-cron");
const axios = require("axios");
const Company = require("../models/company.js");
const priceStringToNumber = require("../library/priceStringToNumber.js");

const getPreviousDay = (today) => {
  today.setDate(today.getDate() - 1);
  return today.toISOString().split("T")[0];
};

const getStockCodes = async () => {
  const fortune100 = await Company.find({});
  const stockCodes = fortune100.map((company) => company.stockCode);
  return stockCodes;
};

const getClosePrices = async () => {
  const previousDay = getPreviousDay(new Date());
  const stockCodes = await getStockCodes();
  try {
    const res = await axios.get(
      `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${previousDay}?adjusted=true&apiKey=${process.env.POLYGON_API_KEY}`
    );
    const resultsData = res.data["results"];
    for (const stockCode of stockCodes) {
      const currentPrice = resultsData.find((company) => company["T"] === stockCode)["c"];
      await Company.findOneAndUpdate(
        { stockCode: stockCode },
        { $push: { currentPrices: { date: previousDay, closePrice: priceStringToNumber(currentPrice) } } }
      );
    }
  } catch (error) {
    console.log("could not get data");
  }
};

const closePriceCron = () =>
  cron.schedule("00 9 * * *", async () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (dayOfWeek > 1) {
      await getClosePrices();
      console.log("Success, cron job");
    } else {
      console.log("Market was closed yesterday");
    }
  });

module.exports = closePriceCron;
