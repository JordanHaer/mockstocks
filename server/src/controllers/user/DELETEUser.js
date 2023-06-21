const User = require("../../models/user.js");

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    res.status(500).send("An error occurred deleting the user");
  }
};

module.exports = deleteUser;
