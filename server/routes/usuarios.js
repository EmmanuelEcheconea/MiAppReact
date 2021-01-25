//rutas para crear usuarios
const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

//crear un usuario

//api/usuarios
router.post('/', usuarioController.crearUsuario);

module.exports = router;