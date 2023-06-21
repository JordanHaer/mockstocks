const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  name: String,
  balance: { type: Number, default: 100000 },
  portfolio: { type: Array, default: [] },
  transactions: { type: Array, default: [] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
