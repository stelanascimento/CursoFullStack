const fs = require('fs');

const erro ="Deu erro ao cadastrar";

fs.writeFile("./arquivoTetela.txt",erro,() => {
    console.log("Arquivo foi escrito");


});
