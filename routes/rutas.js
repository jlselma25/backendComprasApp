const { Router } = require('express');

const {     
CargarProductos,
ActualizarEstado,
GuardarProducto,
EliminarProducto,
Keepalive,
Status

} = require('../controllers/productos');


const router = Router();

router.get('/CargarProductos/', CargarProductos );
router.get('/ActualizarEstado/', ActualizarEstado );
router.get('/GuardarProducto/', GuardarProducto );
router.get('/EliminarProducto/', EliminarProducto );
router.get('/Keepalive/', Keepalive );
router.get('/Status/', Status );



module.exports = router;
