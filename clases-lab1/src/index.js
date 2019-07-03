
const Empleado = require('./Empleado'); 

let empleado = new Empleado ('Marcelo','Albis');
empleado.cargo = "Programador";
console.log(empleado.nombreCompleto());
console.log(empleado.cargo);
