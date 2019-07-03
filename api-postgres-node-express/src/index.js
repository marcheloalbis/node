const express = require('express'); 
const path = require('path'); 
const morgan = require("morgan");
// initializations 
const app = express(); 
// settings 
app.set('port', process.env.PORT || 3000); 
// middlewares 
app.use(express.urlencoded({extended: false})); 
app.use(morgan("dev"));
app.use(express.json()); 
// routes 
//app.use(require('./rutas/alumnos-ruta.js')); 
app.use("/api-cognos/alumnos", require("./rutas/alumnos-rutas"));
// Start the server 
app.listen(app.get('port'), () => { console.log("Server escuchando ", app.get('port')) });

//api-cognos/alumnos