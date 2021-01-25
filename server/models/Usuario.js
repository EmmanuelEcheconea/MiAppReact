const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    usuario:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    contrasena:{
        type:String,
        require:true,
        trim:true
    },
    fechaCreacion:{
        type:Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema);