const User = require("../../models/user.js");

const getUser = async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.json(user);
    } else {
      res.send("no user with this email");
    }
  } catch (error) {
    res.send("Could not verify if user has an account");
  }
};

module.exports = getUser;
