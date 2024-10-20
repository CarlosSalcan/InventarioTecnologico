const express = require('express')
const router = express.Router();

const userController = require('../controllers/user.controller.js');
const inventoryController = require('../controllers/inventory.controller.js');
const optionController = require('../controllers/option.controller.js');

// Ruta para el inicio de sesión
// Ruta para obtener los datos del inventario
router.post('/login', userController.loginUser);
router.get('/inventory', inventoryController.getAllItems);

router.get('/options/pisos', optionController.getPisos);
router.get('/options/servicios', optionController.getServicios);

module.exports = router;