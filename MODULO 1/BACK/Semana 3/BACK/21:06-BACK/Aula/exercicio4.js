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
            quantidade: 3
        }
    ]
};


//precoUnit*quantidade
let totalaPagar = 0;
for(let item of comanda.produtos){
  // totalaPagar = totalaPagar + (item.quantidade * item.precoUnit);
   //outra forma de fazer a mesma coisa
    totalaPagar += item.quantidade * item.precoUnit;
}


console.log(`${comanda.nome}, o valor total a pagar eh ${totalaPagar/100}reais.`);