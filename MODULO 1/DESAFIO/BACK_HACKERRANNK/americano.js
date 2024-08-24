//Jogo-zerinho ou um americano
// X um numero qualquer jogado

const numeros = [1,3,2,2];


let soma = 0;
for(let number of numeros){
    soma += number;
}
let posicao = soma % numeros.length ;

    if(posicao === 0){
        console.log(numeros.length);
    }else{
        console.log(posicao);
    }

