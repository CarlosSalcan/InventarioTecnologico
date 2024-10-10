const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Ruta para el login
router.post('/login', authController.login);

module.exports = router;
