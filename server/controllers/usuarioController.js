const Usuario = require('../models/Usuario');
exports.crearUsuario = async (req,res) => {
    try{

        let usuario;
        //crear el usuario a partir de lo q viene del ladod el front
        usuario = new Usuario(req.body);

        //guarda ese usuario
        await usuario.save();

        res.send("usuario guardado");
    }catch(err){
        console.log(err);
        res.status(400).send("hubo un error");
    }
}