//requieres
const express = require('express');
//servidor
const app = express();

// defino la pagina principal
app.get('/' , (req,res) => {
    res.send("hola mundo");
});

//puerto de la app
const PORT = process.env.PORT;
app.set('port', PORT || 5000);

app.listen(app.get('port') , () => {
    console.log("el server esta funcionando en el puerto " + app.get('port'));
});