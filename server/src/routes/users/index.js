const express = require("express");
const getUsers = require("../../controllers/users/GETUsers.js");

const usersRouter = express.Router();

usersRouter.route("/users").get(getUsers);

module.exports = usersRouter;
