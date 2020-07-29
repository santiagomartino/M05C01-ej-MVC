const fs = require('fs');

module.exports = {
    getAll: ( req, res ) => {
        let heroesData = JSON.parse( fs.readFileSync( __dirname + '/../data/heroes.json','utf-8' ) );
        res.send( heroesData );
    },
    findById: ( req, res ) => {
        let id = Number(req.params.id);
        let heroesData = JSON.parse( fs.readFileSync( __dirname + '/../data/heroes.json','utf-8' ) );
        let filtered = heroesData.filter(hero => {
            return id === hero.id
        });
        if ( filtered.length > 0 ) {
            let texto = "Hola, mi nombre es " + filtered[0].nombre.toUpperCase() + " y soy " + filtered[0].profesion.toUpperCase();
            res.send( texto );
        } else {
            res.send("No tenemos en nuestra base ningún héroe ni heroína con ese id");
        }
    },
    getByIdWhitResenia: ( req, res ) => {
        let id = Number(req.params.id);
        let tipo = req.params.tipo;
        let heroesData = JSON.parse( fs.readFileSync( __dirname + '/../data/heroes.json','utf-8' ) );
        let filtered = heroesData.filter(hero => {
            return id === hero.id
        });
        if ( filtered.length > 0 ) {
            let texto = "";
            if ( tipo === "completa" ) { 
                texto = "<h3>Nombre: " + filtered[0].nombre + "</h3>"+ 
                "<p>Reseña: " + filtered[0].resenia + "</p>";
            } else {
                let reseniaCorta = filtered[0].resenia.slice(0, 29);
                texto = "<h3>Nombre: " + filtered[0].nombre + "</h3>"+ 
                "<p>Reseña: " + reseniaCorta + "</p>";
            }

            res.send( texto );
        } else {
            res.send("No tenemos en nuestra base ningún héroe ni heroína con ese id");
        }


    }
}