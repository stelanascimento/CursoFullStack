// 80 % dos clientes compravam 2 itens nessa epoca 
// 3 itens tem DESCONTO DE 50% NO ITEM MAIS BARATO.

const precos = [100,100,100];

let total = 0;
let valorAPagar = 0;
let menor = precos[0];

for(let valor of precos){
    total += valor;
    if(valor < menor){
        menor = valor;
    }
}
if(precos.length > 2){ // aplicar desconto
    valorAPagar = (total - menor) + (menor * 0.5);
    console.log(valorAPagar);
}else{
    console.log(total);
}