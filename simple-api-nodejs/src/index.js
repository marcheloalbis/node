const express = require('express');
const app = express();

app.use(express.json());
app.use('/',require('./rutas/api-alumnos'));
app.use('/api-cognos/alumnos',require('./rutas/alumnos-rutas'));

app.listen(3000, () => {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
   });