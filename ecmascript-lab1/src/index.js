//ES6 function fecha y landa
factorial = (num)=>{
    if(num<=0) return 1
    else return (num * factorial(num-1)) 
}
console.log(factorial(6));


// ES6 numericoo
const tipo_cambio = new Number('6.96');
console.log(tipo_cambio*2);


//ES6 Objetos
const alumno = {
    nombre:'Marcelo',
    apellido:'Albis',
    func:()=>{return 'hola mundo'},
};
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.func());

//E6 boolean
const val = new Boolean ('true');
if(val) console.log('es verdadero');



//E6 string
const descripcion = new String('Porcentaj 10%');
console.log(descripcion.toUpperCase());


//E6 plantilla

const  mensaje = () =>{return 'plantilla'};
const parametro = '10%';
console.log(`el parametro es ${parametro} de la ${mensaje()}`);

/*
// objeto json
{
    const alumnos: {{
            nombre: "Jorge",
            curso: {
                nombre_curso: "Node Js" ,{
                    nota1": 10,
                    nota2": 10,
                    nota3": 10
                }
               
            }
        
        {
            nombre: "Ana",
            curso: {
                nombre_curso: "Angular",
                 nota1: 10,
                 nota2: 10,
                 nota3: 10
            }
        }
    
}

//
Console.log(JSON.stringify(alumnos,null,2))
*/
