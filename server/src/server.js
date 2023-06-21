const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const closePriceCron = require("./cron/closePriceCron.js");
const companiesRouter = require("./routes/companies/index.js");
const companyRouter = require("./routes/company/index.js");
const userRouter = require("./routes/user/index.js");
const usersRouter = require("./routes/users/index.js");
dotenv.config();
connectDB();
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("Server is running, you are at the root route."));
app.use("/", companiesRouter);
app.use("/", companyRouter);
app.use("/", userRouter);
app.use("/", usersRouter);

closePriceCron();

app.listen(port, () => console.log(`listening on port ${port}`));
