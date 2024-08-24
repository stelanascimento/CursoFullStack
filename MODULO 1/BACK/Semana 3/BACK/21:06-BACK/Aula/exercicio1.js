const pessoa = {
    nome: "Stela",
    idade: 23,
    altura: 1.68,
    temCNH: true,
    apelidos: ["Tetela","Artois"]
};

let textoCNH = "";
if(pessoa.temCNH){
    textoCNH = "possui";
}else{
    textoCNH = " nao possui";
}
console.log(`${pessoa.nome} tem ${pessoa.idade}anos,${pessoa.altura}m de altura,${textoCNH} CNH e os seguintes apelidos:`);

for(let apelido of pessoa.apelidos){
    console.log(`-${apelido}`);
}
   


