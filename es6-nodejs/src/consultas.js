const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json','utf8'));

const subAmerica = paises.filter((pais)=>{
    return pais.subregion === 'South America';
});


let mundo=[];

let poblaciones = [];
subAmerica.forEach(pais => {
    poblaciones.push({         
        nombre : pais.name,         
        capital : pais.capital,         
        poblacion : pais.population,
        lenguaje : pais.languages
        }) 
       }); 
       paises.forEach(pais => {
        mundo.push({         
            nombre : pais.name,         
            poblacion : pais.population}) 
           });
//console.log(poblaciones); 

fs.writeFile('./src/data/subamerica.json', JSON.stringify(poblaciones,null,2), error => {   
    if (error)     
    console.log(error);   
    else     
    console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `); 
}); 

let pob = [];
paises.forEach(pais => {
    pob.push({    
        nombre : pais.name,      
        poblacion : pais.population
        }) 
       }); 
//console.log(pob); 

for(let i in pob) {     
    console.log(pob[i])  
} 


mundo.sort((a, b) => (a.poblacion > b.poblacion) ? -1 : 1)
let topdiez = mundo.slice(0, 10);
//console.log(topdiez);   

fs.writeFile('./src/data/toppaises.json', JSON.stringify(topdiez,null,2), error => {   
    if (error)     
    console.log(error);   
    else     
    console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `); 
}); 
    

  