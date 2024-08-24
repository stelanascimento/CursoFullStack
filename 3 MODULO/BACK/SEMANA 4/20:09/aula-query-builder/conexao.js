const { Pool } = require('pg'); // pego a classe  pool, que estanciei um pool de conexao.

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'biblioteca',
    password: '40028922',
    port: 5432
});  // passei as credenciais para que essa conexao aconteca.

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}

//pool.query('select * from livros where id = $1 and nome = $2', [3, "tal"]);

