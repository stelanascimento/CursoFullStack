// Desestruturacai - Destructuring
//serve para criar variaveis a partir de um objeto

const pessoa = {
    nome: "Joao",
    idade: 34,
    cidade: "Salvador",
    profissao: "Desenvolvedor",
};

// const nome = pessoa.nome; //criar uma variavel que representa algo que veio do objeto pessoa
// const idade = pessoa.idade;

const {nome: nome_da_pessoa, idade, ...outras} = pessoa; //desestruturacao, nao eh quiar um objeto ,nem um objeto novo
// a propriedade nome va para variavel nome_da_pessoa
//nome_da_pessoa eh avariavel que eu criei
//nao exite variavel nome.



console.log(nome_da_pessoa);
console.log(idade);
console.log(outras);
console.log(pessoa);
