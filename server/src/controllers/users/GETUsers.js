const User = require("../../models/user.js");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-email -transactions");
    res.json(users);
  } catch (error) {
    res.status(500).send("Error retrieving users");
  }
};

module.exports = getUsers;
