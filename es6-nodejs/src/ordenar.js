/* const objs =[
    {nombre:"asd",edad:90},
    {nombre:"asdasd",edad:45},
    {nombre:"asqwead",edad:34}
]
compare(a,b)=> {
    if (a.poblacion < b.poblacion)
       return -1;
    if (a.poblacion > b.poblacion)
      return 1;
    return 0;
  }
  objs.sort(compare);
  console.log(objs); */

  var foo = {a:1, b:2, c:3, d:4, e:5, f:6, g:7}
var props = Object.keys(foo).map(function(key) {
  return { key: key, value: this[key] };
}, foo);
props.sort(function(p1, p2) { return p2.value - p1.value; });
var topThree = props.slice(0, 3); 

//sdfs