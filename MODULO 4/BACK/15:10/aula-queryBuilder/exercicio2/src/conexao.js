const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '40028922',
        database: 'tarde'
    }
});

module.exports = knex;