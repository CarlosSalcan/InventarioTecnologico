const express = require('express')
const router = express.Router();

const userController = require('../controllers/user.controller.js');
const inventoryController = require('../controllers/inventory.controller.js');
const optionController = require('../controllers/option.controller.js');

// Ruta para el inicio de sesión
// Ruta para obtener los datos del inventario
// Ruta para la modificaicon de datos
router.post('/login', userController.loginUser);
router.get('/inventory', inventoryController.getAllItems);

router.get('/options/pisos', optionController.getPisos);
router.get('/options/servicios', optionController.getServicios);

router.put('/inventory/:cod_equipo', inventoryController.updateItem);

module.exports = router;