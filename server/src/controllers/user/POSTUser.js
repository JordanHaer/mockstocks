const User = require("../../models/user.js");

const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await User.create({ email: email, name: name });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send("An error occurred creating the user");
  }
};

module.exports = createUser;
