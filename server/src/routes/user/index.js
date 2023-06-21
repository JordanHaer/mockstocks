const express = require("express");
const getUser = require("../../controllers/user/GETUser.js");
const createUser = require("../../controllers/user/POSTUser.js");
const updateUserBuy = require("../../controllers/user/PUTUserBuy.js");
const deleteUser = require("../../controllers/user/DELETEUser.js");
const updateUserSell = require("../../controllers/user/PUTUserSell.js");

const userRouter = express.Router();

userRouter.route("/user").get(getUser).post(createUser);
userRouter.route("/user/:id").delete(deleteUser);
userRouter.route("/user/buy/:id").put(updateUserBuy);
userRouter.route("/user/sell/:id").put(updateUserSell);

module.exports = userRouter;
