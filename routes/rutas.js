const { Router } = require('express');

const {     
CargarProductos,
ActualizarEstado,
GuardarProducto,
EliminarProducto,
Keepalive,
Status,
QuitarSeleccionados

} = require('../controllers/productos');


const router = Router();

router.get('/CargarProductos/', CargarProductos );
router.get('/ActualizarEstado/', ActualizarEstado );
router.get('/GuardarProducto/', GuardarProducto );
router.get('/EliminarProducto/', EliminarProducto );
router.get('/Keepalive/', Keepalive );
router.get('/Status/', Status );
router.get('/QuitarSeleccionados/', QuitarSeleccionados );



module.exports = router;
