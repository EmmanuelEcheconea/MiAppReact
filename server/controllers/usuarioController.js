const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
exports.crearUsuario = async (req,res) => {

    const {email, contrasena} = req.body;


    try{

        //verifico que no haya otro usuario igual
        let usuario = await Usuario.findOne({email});
        if( usuario)
        {
            return res.status(400).json({msg: 'el usuario ya existe'});
        }

        //crear el usuario a partir de lo q viene del ladod el front
        usuario = new Usuario(req.body);
        
        //hasheo el pass
        const salt = await bcryptjs.genSalt(10);
        usuario.contrasena = await bcryptjs.hash(contrasena , salt);
        
        //guarda ese usuario
        await usuario.save();

        res.json({msg: 'Usuario Creado Correctamente'});
    }catch(err){
        console.log(err);
        res.status(400).send("hubo un error");
    }
}