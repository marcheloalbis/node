const {
    Router
} = require('express');
const router = new Router();
let alumnos = [];
router.get("/", (req, res) => {
    res.render("index", {
        alumnos
    });
});
router.get('/registro-form', (req, res) => {
    res.render('registro-form');
});
router.post('/registro-form', (req, res) => {
    let {
        nombre,
        documento,
        curso,
    } = req.body;
    let nuevoRegistro = {
        nombre,
        documento,
        curso,
        fecha: new Date()
    };
    alumnos.push(nuevoRegistro);
    res.redirect("/");
});
module.exports = router;