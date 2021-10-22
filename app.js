var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
require("dotenv").config();

const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const salesRoutes = require("./routes/sales");
const utils = require("./routes/utils");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(process.env.MONGODB_CONNECT).then(() => {
  console.log("Base de datos conectada");
});

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/ping", utils);

module.exports = app;
