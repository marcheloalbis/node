const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json','utf8'));
const funciones = require('./funciones');

/*
//1. sacar nombre, capital, poblacion y lenguaje de los paises de sudAmerica en un archivo 
const subAmerica = paises.filter((pais)=>{
    return pais.subregion==='South America';
});

let sudAmerica = []; 
 
//lista de paises 
subAmerica.forEach(pais => {     
    sudAmerica.push({         
        nombre : pais.name,         
        capital : pais.capital,         
        poblacion : pais.population,
        lenguaje : pais.languages
    }) 
}); 
//console.log(sudAmerica); 

fs.writeFile('./src/data/sudamerica.json', JSON.stringify(sudAmerica,null,2), error => 
{   if (error)     
    console.log(error);   
    else     
    console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `); 
});
*/

 //2. sacar los 10 paises con mayor poblacion en un archivo
/* let top10 = []; 
let nroTop = 1;
let paisesAux = paises;

for(let i=0;i<10;i++) {
    let nombrePais=''; 
    let decMax=0; 
    paisesAux.forEach(pais => {     
        if(pais.population>decMax){
            nombrePais = pais.name;
            decMax = pais.population;
        }
    });
    let paisTop = paisesAux.find(pais => pais.name === nombrePais );
    top10.push({
        posicion : nroTop,        
        nombre : paisTop.name,         
        poblacion : paisTop.population
    });
    nroTop++;
    paisesAux = paisesAux.filter((pais)=>{
        return pais.name!==nombrePais;
    });
}
fs.writeFile('./src/data/top10.json', JSON.stringify(top10,null,2), error => 
{   if (error)     
    console.log(error);   
    else     
    console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `); 
}); */

//3. sacar los 10 paises con mayor poblacion en un archivo con la funcion de ordenar

let paisesOrdenado=[];
paises.forEach(pais => {
    paisesOrdenado.push({
            nombre: pais.name,
            poblacion : pais.population
    })
}); 

paisesOrdenado.sort(funciones.ordenDesc);

let paisesOrdenadoTop=[];
for(let i=0;i<10;i++){
    paisesOrdenadoTop.push({
        posicion : i+1,
        nombre: paisesOrdenado[i].nombre,
        poblacion: paisesOrdenado[i].poblacion
    })
}

//console.log(paisesOrdenadoTop);
fs.writeFile('./src/data/top10.json', JSON.stringify(paisesOrdenadoTop,null,2), error => 
{   if (error)     
    console.log(error);   
    else     
    console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `); 
});
