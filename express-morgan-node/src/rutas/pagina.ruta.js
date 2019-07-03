const express =require ('express');
const router = express.Router();

router.get('inicio',(req,res)=>{
    res.send('Pagina inicio');

});

router.get('acercade',(req,res)=>{
    res.send('Acerca de esta pagina');

});

module.exports = router;