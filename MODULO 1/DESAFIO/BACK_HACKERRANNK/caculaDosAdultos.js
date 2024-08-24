//apenas >=18anos
// <18 imprimir CRESCA E APARECA
//lista array de todo mundo

//menor

const lista = [12,1,11];




const novoArray = [];
let menor = 0;

 for(let pessoa of lista){
     if(pessoa >=18){
         novoArray.push(pessoa);
         menor = novoArray[0];
    }
}
for(let pessoa of novoArray){
    if(pessoa < menor){
        menor = pessoa;
    }
}
if(menor === 0){
    console.log("CRESCA E APARECA");
}else{
    console.log(menor);
}

