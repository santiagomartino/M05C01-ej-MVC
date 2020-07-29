const express = require('express');
const router = express.Router();

router.get('/', ( req, res ) => {
    res.send('<h1>Créditos:</h1>  <p>* Santiago Martino</p> <p>* Matias Vieira</p>');
});


module.exports = router;