const express = require('express');
const router = express.Router();
const Evaluacion = require('../modelos/evaluacion');

 router.get('/', async (req, res) => {
    const evalucions = await Evaluacion.find();
    res.render('index', {
        evalucions
    });
}); 
router.post('/insertar', async (req, res, next) => {console.log(req.body);
    const {
        curso,
        instructor,
        preguntas,
        comentarios
    } = req.body;
    const evaluacion = new Evaluacion({
        curso,
        instructor,
        preguntas,
        comentarios
    });
    await evaluacion.save();
    res.redirect('/');
});
/* router.get('/editar/:id', async (req, res, next) => {
    const {
        ci
    } = req.params;
    const result = await Evaluacion.find({
        ci
    });
    res.render('editar-form', {
        evaluacion: result[0]
    });
}); */
/* router.post('/editar/:id', async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        nombres,
        apellidos
    } = req.body;
    await Alumno.update({
        ci
    }, {
        nombres,
        apellidos
    });
    res.redirect('/');
}); */
/* router.get('/eliminar/:ci', async (req, res, next) => {
    const {
        ci
    } = req.params;
    await Alumno.findOneAndDelete({ci}) 
    res.redirect('/');
}); */
module.exports = router;