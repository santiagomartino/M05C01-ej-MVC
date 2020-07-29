// Micro desafío.
// 1. Inicializar proyecto de npm
// 2. Instalar express y nodemon
// 3. (opcional) Crear script para nodemon
// 4. Crear estructura de carpetas
//      - views
//          - index.html
//      - public
//          - css/style.css

const express = require('express');
const app = express();

// Archivos de rutas 
const mainRoutes = require('./routes/main');
const heroesRoutes = require('./routes/heroes');
const creditosRoutes = require('./routes/creditos');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/heroes', heroesRoutes);
app.use('/creditos', creditosRoutes);






// app.get('/students/:variable/:otrasVariables', ( req, res ) => {
//     console.log(req.params);
//     res.send("la pagina students");

app.listen(3000, () => {
    console.log('Servidor corriendo puerto 3000')
});