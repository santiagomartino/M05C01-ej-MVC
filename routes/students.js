const express = require('express');
const router = express.Router();

router.get('/', ( req, res ) => {
    console.log(req.params);
    res.send("la pagina students");
});
    

router.get('/group/:group?', ( req, res ) => {
    console.log(typeof(req.params.group));

    if(req.params.group >= 1 && req.params.group <= 12 ) {
        res.send("la pagina students de grupo " + req.params.group);
    } else {
        res.send("El número del grupo es invalido");
    }
});

router.get('name/:name?', ( req, res ) => {
    res.send("name " + req.params.name);
});


module.exports = router;