const { Router } = require('express');

const {     
CargarProductos,
ActualizarEstado,
GuardarProducto

} = require('../controllers/productos');


const router = Router();

router.get('/CargarProductos/', CargarProductos );
router.get('/ActualizarEstado/', ActualizarEstado );
router.get('/GuardarProducto/', GuardarProducto );



module.exports = router;
