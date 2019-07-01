const express = require('express');
const router = express.Router();
router.get('/inicio', (req, res) => {
 res.send('pagina de incio');
});
router.get('/acercade', (req, res) => {
 res.send('Acerca de esta pagina');
});
module.exports = router;