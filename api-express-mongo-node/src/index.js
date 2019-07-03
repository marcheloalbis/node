const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

// initializations
const app = express();
mongoose.connect("mongodb://localhost/cognosdb");
// settings
app.set("port", process.env.PORT || 3000);
// middlewares
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// routes
app.use("/api-cognos/alumnos", require("./rutas/alumnos.rutas"));
// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
