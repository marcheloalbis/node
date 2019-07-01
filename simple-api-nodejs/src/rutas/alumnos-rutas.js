const express = require('express');
const router = express.Router();
const alumnos =[];
let alumn ={};

   router.get('/', (req, res) => {
    res.json({alumnos})
   });
   router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    alumno= alumnos.filter(alumno=>alumno.id===id)
    res.json({alumnos});
   });
   router.post('/',(req,res)=>{
      alumnos.push(req.body);
    res.json({alumnos});
   });
   router.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {ci,nombre,apellido,curso} = req.body;
    res.json({mensaje:'Alumno Datos Actualizado',datos:{ci,nombre,apellido,curso}});
   });
   router.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = alumnos.findIndex(alumno=>alumno.id===id);
    alumnos.splice(index, 1);
    res.json({mensaje:'Alumno eliminado',datos:{id}});
   });
   module.exports = router;