const fs = require("fs");

const conteudo = fs.readFileSync("teste.txt");
console.log(conteudo);
console.log(conteudo.toString("utf-8"));

console.log(Buffer.from("dbcdsbue", "utf-8"));

// const str = conteudo.toString("latin1");
// console.log(str);

// const conteudo2 = Buffer.from("Oii","latin1");
// console.log(conteudo2);

// const teste = "☺☺☺☺";
// console.log(teste);
// console.log(Buffer.from(teste, "utf-8"));

