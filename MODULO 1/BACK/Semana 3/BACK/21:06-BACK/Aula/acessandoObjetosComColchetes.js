const pessoa = {
    nome: "Stela",
    idade: 23,
    altura: 1.68,
    temCNH: true,
    apelidos: ["Tetela","Artois"]
};



const propriedade = "nome";//guardando o nome da propriedade que eu quero acessar.
console.log(`Bem-vinda,${pessoa[propriedade]}.Voce tem ${pessoa["idade"]}anos.`)