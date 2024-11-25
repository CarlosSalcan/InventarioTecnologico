const express = require('express')
const router = express.Router();

const userController = require('../controllers/user.controller.js');
const inventoryController = require('../controllers/inventory.controller.js');
const optionController = require('../controllers/option.controller.js');
const componentController = require('../controllers/component.controller.js');

// Ruta para el inicio de sesión
// Ruta para obtener los datos del inventario
// Ruta para la modificaicon de datos // TODO: Optimzar
router.post('/login', userController.loginUser);
router.get('/inventory', inventoryController.getAllItems);

router.get('/options/pisos', optionController.getPisos);
router.get('/options/servicios', optionController.getServicios);
router.get('/options/marcas', optionController.getMarca);
router.get('/options/memoria', optionController.getMemoria);
router.get('/options/procesador', optionController.getProcesador);
router.get('/options/tamHdd', optionController.getTamHdd);
router.get('/options/disOpt', optionController.getDisOpt);
router.get('/options/sisOpe', optionController.getSisOpe);
router.get('/options/office', optionController.getOffice);
router.get('/options/nomAntivirus', optionController.getNomAntivirus);
router.get('/options/condicion', optionController.getCondicion);
router.get('/options/estado', optionController.getEstado);

router.get('/options/tamMtr', optionController.getTamMonitor);
router.get('/options/conexion', optionController.getTipConexion);
router.get('/options/puerto', optionController.getPuerto);

router.put('/inventory/:cod_equipo', inventoryController.updateItem);
router.get('/inventory/escritorio', inventoryController.getEscritorioInventory);

router.get('/inventoryFilter/:tipo', inventoryController.getEquipoInventory); //-------->
router.put('/monitor/:cod_monitor',componentController.updateMonitor);
router.put('/mouse/:cod_mouse',componentController.updateMouse);
router.put('/teclado/:cod_teclado',componentController.updateTeclado);
router.put('/cpu/:cod_cpu',componentController.updateCPU);


module.exports = router;