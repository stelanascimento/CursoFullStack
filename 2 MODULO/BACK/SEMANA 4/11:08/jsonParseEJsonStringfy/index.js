const fs = require("fs");

const conteudo = fs.readFileSync("dados.json").toString(); // vai virar uma string 
const dados = JSON.parse(conteudo); // vai transformar o string em objeto para podermos trabalhar

console.log(conteudo);  // eh uma string

console.log(dados);  // objeto

console.log(dados.nome);
dados.interesses.push("esportes");
console.log(dados); 

const novoConteudo = JSON.stringify(dados, null, 2); // vai retornar uma string no formato json.
console.log(novoConteudo);  

fs.writeFileSync("dados2.json",novoConteudo);


