
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASS,
  host: process.env.HOSTNAME,
  port:parseInt(process.env.PORT, 10),
  database: process.env.DATABASE,
  ssl: { rejectUnauthorized: true }
});

async function executeQuery(query) {
    try {
        const result = await pool.query(query);       
        return result.rows;
        //console.log(result.rows);
    }
    catch(e){
        console.log('Errorrrrrrr  ', e );
        return [];
    }
}

module.exports = { executeQuery };



