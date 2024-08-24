const fs = require("fs");

const conteudo = fs.readFileSync("texto.txt");
fs.writeFileSync("novoTexto.txt",conteudo);

