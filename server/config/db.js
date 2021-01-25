const mongoose = require('mongoose');
const config = require('./config.json');

const URI = 'mongodb://localhost/mern-tasks';


const conectarDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log(JSON.stringify( config.URIDB));
        console.log("me conecte a la db de forma correcta");
    }catch(err){
        console.log(err);
        process.exit(1);
    }

}

module.exports = conectarDB;