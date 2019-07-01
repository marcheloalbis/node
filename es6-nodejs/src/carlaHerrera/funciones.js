const ordenDesc = (a,b)=>{
    if(a.poblacion<b.poblacion){
        return 1;
    }
    if(a.poblacion>b.poblacion){
        return -1;
    }
    return 0;
}

const ordenAsc = (a,b)=>{
    if(a.poblacion<b.poblacion){
        return -1;
    }
    if(a.poblacion>b.poblacion){
        return 1;
    }
    return 0;
}

module.exports.orden = ordenAsc;
module.exports.ordenDesc = ordenDesc;