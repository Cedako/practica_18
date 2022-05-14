// inyeccion de express, instancia del router
let express = require('express');
let router = express.Router();


router.get('/person', (req, res) => {
    res.send('has solicitado un listado de personas');
})

module.exports= router;