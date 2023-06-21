const User = require("../../models/user.js");
const Company = require("../../models/company.js");
const marketOpen = require("../../library/marketOpen.js");

const updateUserSell = async (req, res) => {
  if (!marketOpen()) {
    res.send("This trade cannot be executed as the market is closed");
    return;
  }
  const id = req.params.id;
  const { stockCode, quantity } = req.body;
  const quantityNum = parseInt(quantity);
  if (quantityNum === 0) {
    res.send("You cannot sell zero stocks");
    return;
  }
  try {
    const user = await User.findById(id);
    const company = await Company.findOne({ stockCode: stockCode });
    const price = company.currentPrices[company.currentPrices.length - 1].closePrice;
    const portfolio = user.portfolio;
    const existingStock = portfolio.find((stock) => stock.stockCode === stockCode);
    if (existingStock.quantity < quantityNum || !existingStock) {
      res.send("Insufficient stock to sell");
      return;
    } else {
      existingStock.quantity -= quantityNum;
      if (existingStock.quantity === 0) {
        const index = portfolio.findIndex((stock) => stock.stockCode === stockCode);
        portfolio.splice(index, 1);
      }
    }
    const balance = user.balance + price * quantityNum;
    const transaction = {
      type: "sell",
      stockCode: stockCode,
      price: price,
      quantity: quantityNum,
      date: new Date().toISOString().split("T")[0],
    };
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          balance: balance.toFixed(2),
          portfolio: portfolio,
        },
        $push: { transactions: transaction },
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send("error updating user trade");
  }
};

module.exports =  updateUserSell;
