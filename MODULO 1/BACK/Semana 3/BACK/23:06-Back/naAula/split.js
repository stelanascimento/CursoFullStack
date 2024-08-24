const textao = "Eu gosto de praia. Eu vou pra praia.Ja fui viu";
const frases = textao.split(".");

console.log(frases);
let novoArray= [];

for(let frase of frases){
    novoArray.push(frase.trim());

}
console.log(novoArray);