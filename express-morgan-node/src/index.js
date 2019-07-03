const express = require("express");
const app = express();
const fs =require('fs');
const path = require('path');
const morgan = require('morgan');
//rutas 


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/server.log'), { flags: 'a' })
 
/* const logDirectory = path.join(__dirname, 'log');
 
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs('server.log', {
    path: logDirectory
  });
// setup the logger*/
app.use(morgan('combined', { stream: accessLogStream })); 
 
app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.use(express.json());
app.use("/", require("./rutas/pagina.ruta"));
app.use("/api-cognos", require("./rutas/api.rutas"));

//server 
app.listen(3000, () => {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});