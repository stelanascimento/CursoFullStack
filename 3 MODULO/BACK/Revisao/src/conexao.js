const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rede_social2',
    password: '40028922',
    port: 5432
});

const query = (text, param) => {
    return pool.query(text, param);
}


module.exports = {
    query,
}