const express = require('express')
const router = express.Router();

const userController = require('../controllers/user.controller.js');

// Ruta para el inicio de sesión
router.post('/login', userController.loginUser);

module.exports = router;