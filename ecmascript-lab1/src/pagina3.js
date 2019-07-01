//es6 array
const cursos=['nodejs','angular','react','mongodb','sql'];
cursos.splice(2,0,'postgres');
console.log(cursos);

const eliminado = cursos.splice(3,1);
console.log(`${cursos} elemento eliminado ${eliminado}`);

cursos.push('ms-sqlserver');
console.log(cursos);

const curso = cursos.find(elemnto=>elemnto==='mongodb');
if(curso) console.log(`curso encontrado ${curso}`);

for(let i in cursos)
{
    console.log(cursos[i])
}

cursos.forEach(curso=>{
    console.log(curso);
});

cursos.map((curso,index)=>{
    console.log(index,curso);
});
const horarios = new Map();
horarios.set('001',{curso:'nodejs',horario:'19:00-22:00'});
horarios.set('002',{curso:'amgular',horario:'19:00-22:00'});
horarios.set('003',{curso:'react',horario:'19:00-22:00'});
console.log(horarios.get('002'));