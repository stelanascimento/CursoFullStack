/*const nome = "Jose";
const idade = 30;
const altura = 1.73;
const temCNH = true;
const apelidos = ["jr","Juninho"];
*/


const pessoa = {
    nome: "Stela",
    idade: 23,
    altura: 1.68,
    temCNH: true,
    apelidos: ["Tetela","Artois"]
};

console.log(`Bem vindo, ${pessoa.nome}.Voce tem ${pessoa.idade}anos.`);
console.log(`Bem vinda,${pessoa["nome"]}.Voce tem ${pessoa["idade"]} anos.`)
