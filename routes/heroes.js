const express = require('express');
const router = express.Router();
// const fs = require('fs');

const controller = require('../controllers/heroesController');


router.get('/', controller.getAll );

router.get('/:id', controller.findById );

router.get('/:id/resenia/:tipo?', controller.getByIdWhitResenia );


module.exports = router;