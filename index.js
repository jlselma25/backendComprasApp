

const  express  = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/compras', require('./routes/rutas'));

app.listen(process.env.PORTEXPRESS, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);
});



// async function Ejecutar() {

//   await executeQuery();
// }

// Ejecutar();