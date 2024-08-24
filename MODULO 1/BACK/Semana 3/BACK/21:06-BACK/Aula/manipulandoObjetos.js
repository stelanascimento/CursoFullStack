const pessoa = {
    nome: "Stela",
    idade: 23,
    altura: 1.68,
    temCNH: true,
    apelidos: ["Tetela","Artois"]
};

pessoa.nome = " Joao";
console.log(pessoa);

pessoa.apelidos[0] = "Baggins";
console.log(pessoa);

pessoa.peso = 74 ; //criando um novo membro.
console.log(pessoa);


