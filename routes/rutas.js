const { Router } = require('express');

const {     
CargarProductos,
ActualizarEstado,
GuardarProducto,
EliminarProducto

} = require('../controllers/productos');


const router = Router();

router.get('/CargarProductos/', CargarProductos );
router.get('/ActualizarEstado/', ActualizarEstado );
router.get('/GuardarProducto/', GuardarProducto );
router.get('/EliminarProducto/', EliminarProducto );



module.exports = router;
