var objs =[
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
  console.log(objs);