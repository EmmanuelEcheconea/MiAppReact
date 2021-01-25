//requieres
const express = require('express');
const conectarDB = require('./config/db');


//servidor
const app = express();
app.use(express.json());


//conectar a la DB
conectarDB();

//importar rutas
app.use('/api/usuarios',  require('./routes/usuarios'));


// defino la pagina principal
app.get('/' , (req,res) => {
    res.send("hola mundo");
});

//puerto de la app
const PORT = process.env.PORT;
app.set('port', PORT || 4500);

app.listen(app.get('port') , () => {
    console.log("el server esta funcionando en el puerto " + app.get('port'));
});