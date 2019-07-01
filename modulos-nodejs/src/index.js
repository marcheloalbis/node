 const logModulo = require('./log'); 
 const operaciones = require('./operaciones'); 
 const param1 = 23; 
 const param2 = 10;

logModulo.info(`nodejs iniciado`);
logModulo.warning(`nodejs no esta configurado`);
logModulo.error(`error acceso denegado`);

console.log(`la suma de ${param1} y ${param2} es ${operaciones.sumar(param1,param2)}`);
console.log(`la resta de ${param1} y ${param2} es ${operaciones.resta(param1,param2)}`);