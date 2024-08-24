const localizacao = "Recife-rj";

const endIndex = localizacao.indexOf("-");
//const cidade = localizacao.slice(0,8);
const cidade = localizacao.slice(0,endIndex);

const parte = localizacao.substr(3,5);
console.log(parte);
console.log(localizacao);


console.log(cidade);
const texto = "I am love";
const novaFrase = texto.replace("love","strength");
console.log(novaFrase);
