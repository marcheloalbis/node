const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json','utf8'));

//console.log(`numero de registros :  ${paises.length}`);


const subAmerica = paises.filter((pais)=>{
    return pais.subregion === 'South Amarica';
});

/* subAmerica.forEach(pais =>{
    console.log(pais.name);
});
 */
let poblaciones =[];
let mundo=[];

subAmerica.forEach(pais => {
         poblaciones.push({         
             nombre : pais.name,         
             capital : pais.capital,         
             poblacion : pais.population}) 
            }); 
 
            paises.forEach(pais => {
                mundo.push({         
                    nombre : pais.name,         
                    poblacion : pais.population}) 
                   });
//console.log(mundo); 
 
const bolivia = paises.find(pais => pais.nativeName === 'Bolivia' ); 
//console.log(bolivia); 


/* 
let props = Object.keys(mundo).map(function(key) {
  return { key: key, value: this[key] };
}, mundo);
props.sort(function(p1, p2) { return p2.population - p1.population; });
let topdiez = props.slice(0, 10); */
/* var pairs = Object.keys(mundo).map(function (key) {
    return [key, mundo[key]];
});
pairs.sort(function (a, b) {
    return a[1] - b[1];
});
var result = pairs.slice(-3).reduce(function (obj, pair) {
    obj[pair[0]] = pair[1];
    return obj;
}, {}); */
/* 
compare(a,b)=> {
    if (a.poblacion < b.poblacion)
       return -1;
    if (a.poblacion > b.poblacion)
      return 1;
    return 0;
  }
  objs.sort(compare);
  console.log(objs); */
//console.log(result); 

/* keysSorted = Object.keys(mundo).sort(function(a,b){return mundo[a]-mundo[b]})
console.log(keysSorted);    */

/* var poblac = mundo.slice(0);
poblac.sort(function(a,b) {
    return a.poblacion - b.poblacion;
});
console.log('Por Poblacion:');
console.log(poblac);
 */
/* function sortAssocObject(mundo) {
    var sortable = [];
    for (var key in mundo) {
        sortable.push([key, mundo[key]]);
    }
    // [["you",100],["me",75],["foo",116],["bar",15]]

    sortable.sort(function(a, b) {
        return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0));
    });
    // [["bar",15],["me",75],["you",100],["foo",116]]

    var orderedList = {};
    for (var idx in sortable) {
        orderedList[sortable[idx][0]] = sortable[idx][1];
    }

    return orderedList;
    console.log(orderedList);
}

sortAssocObject(mundo); */

/* var arr=[],
obj={};
for(var i in mundo.poblacion){
arr.push([i, _.sortBy(mundo.poblacion[i],function (el){return el;})]);
}
arr=_.sortBy(arr,function (el){
return el[0];
});
.map(arr,function (el){return obj[el[0]]=el[1];});
console.log(obj);
 */
/* var res = mundo.sort(function(obj1,obj2){ 
    var prop1;
    var prop2;
    for(prop in obj1) {
     prop1=prop;
    }
    for(prop in obj2) {
     prop2=prop;
    }
    //the above two for loops will iterate only once because we use it to find the key
    return obj1[prop1]-obj2[prop2];
   });
   console.log(res); */


mundo.sort((a, b) => (a.poblacion > b.poblacion) ? -1 : 1)
let topdiez = mundo.slice(0, 10);
//console.log(topdiez);   

fs.writeFile('./src/data/toppaises.json', JSON.stringify(topdiez,null,2), error => {   
    if (error)     
    console.log(error);   
    else     
    console.log(` ${new Date().getMilliseconds()} : archivo creado con exito `); 
}); 