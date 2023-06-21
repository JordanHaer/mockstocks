const User = require("../../models/user.js");
const Company = require("../../models/company.js");
const marketOpen = require("../../library/marketOpen.js");

const updateUserBuy = async (req, res) => {
  if (!marketOpen()) {
    res.send("This trade cannot be executed as the market is closed");
    return;
  }
  const id = req.params.id;
  const { stockCode, quantity } = req.body;
  const quantityNum = parseInt(quantity);
  try {
    const user = await User.findById(id);
    const company = await Company.findOne({ stockCode: stockCode });
    const price = company.currentPrices[company.currentPrices.length - 1].closePrice;
    if (user.balance < price * quantityNum) {
      res.send("Insufficient funds to make trade");
      return;
    }
    const balance = user.balance - price * quantityNum;
    const transaction = {
      type: "buy",
      stockCode: stockCode,
      price: price,
      quantity: quantityNum,
      date: new Date().toISOString().split("T")[0],
    };
    const portfolio = user.portfolio;
    const existingStock = portfolio.find((stock) => stock.stockCode === stockCode);
    if (existingStock) {
      existingStock.quantity += quantityNum;
    } else {
      const newStock = { stockCode: stockCode, quantity: quantityNum };
      portfolio.push(newStock);
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          balance: balance,
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

module.exports = updateUserBuy;
