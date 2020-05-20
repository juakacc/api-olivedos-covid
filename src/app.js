const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const olivedosRoutes = require("./controllers/olivedos");

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", olivedosRoutes);

module.exports = app;
