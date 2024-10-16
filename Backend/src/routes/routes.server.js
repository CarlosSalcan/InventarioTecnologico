const express = require('express')
const router = express.Router();

const userController = require('../controllers/user.controller.js');
const inventoryController = require('../controllers/inventory.controller');

// Ruta para el inicio de sesión
router.post('/login', userController.loginUser);

// Ruta para obtener los datos del inventario
router.get('/inventory', inventoryController.getAllItems);

module.exports = router;