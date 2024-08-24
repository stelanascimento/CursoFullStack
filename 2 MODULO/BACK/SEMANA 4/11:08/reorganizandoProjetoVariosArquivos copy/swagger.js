// vai ser o arquivo que ira gerar a documentacao automaticamente.
const swaggerAutogen = require("swagger-autogen");

swaggerAutogen()("./swagger.json", ["./roteador.js"]);
