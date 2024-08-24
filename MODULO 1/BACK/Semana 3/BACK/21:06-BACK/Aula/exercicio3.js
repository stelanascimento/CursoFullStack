const comanda = {
    nome:"Joao",
    idade: 24,
    produtos: [ //array de objetos
        {
            nome:"Batata Frita",
            precoUnit:1400,
            quantidade: 1
        },
        {
            nome:"Pizza",
            precoUnit:5000,
            quantidade: 2
        },
        {
            nome:"Cerveja",
            precoUnit:1000,
            quantidade: 4
        }
    ]
};
console.log(comanda.nome);
console.log(comanda.idade);
comanda.idade = 20;
console.log(comanda.idade);
console.log(comanda.produtos[0].nome);
console.log(comanda.produtos[comanda.produtos.length - 1].precoUnit);





