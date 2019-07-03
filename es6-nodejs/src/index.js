const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json','utf8'));

console.log(`numero de registros :  ${paises.length}`);


const subAmerica = paises.filter((pais)=>{
    return pais.subregion === 'South Amarica';
});

subAmerica.forEach(pais =>{
    console.log(pais.name);
});

let poblaciones =[];

subAmerica.forEach(pais => {
         poblaciones.push({         
             nombre : pais.name,         
             capital : pais.capital,         
             poblacion : pais.population}) 
            }); 
 
console.log(poblaciones); 
 
const bolivia = paises.find(pais => pais.nativeName === 'Bolivia' ); 
console.log(bolivia); 

