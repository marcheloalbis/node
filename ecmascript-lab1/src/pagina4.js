const horarios = new Map();
horarios.set('001',{curso:'nodejs',horario:'19:00-22:00'});
horarios.set('002',{curso:'amgular',horario:'19:00-22:00'});
horarios.set('003',{curso:'react',horario:'19:00-22:00'});
console.log(horarios.get('002'));

horarios.forEach(hora=>{
    console.log(hora);
});


let a = 100;
let b = 0;
try{
    if(b==0){
        throw('Divide by zero error');
    }else{
        let =a/b;
    }
}
catch(e){
    console.log(`Error ${e}`)
}


sum=(x,y,z) => {
    return x+y+z;
}
sum=(x,y,z) =>x+y+z;

const numbers =[1,2,3];
console.log(sum(...numbers));


const arr = [1,2,3];
const arr1 = [...arr];
arr1.push(4);
console.log(arr1);

const arr2 = [0,1,2];
const arr3 = [3,4,5];
arr2.push(...arr3);
console.log(arr2);
