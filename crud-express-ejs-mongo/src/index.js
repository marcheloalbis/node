const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
// connection to db
mongoose.connect("mongodb://localhost/cognosdb")
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));
// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use(require("./rutas/index"));
//server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
