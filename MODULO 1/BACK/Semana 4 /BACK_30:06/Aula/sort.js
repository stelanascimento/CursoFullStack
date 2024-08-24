const numeros =[1,10,2,23,5];
//ordenar em ordem crescente
// 1 Passo: passar uma funcao de comparacao

//return
// - a vem primeiro (menor)
// + b vem primeiro (maior)
numeros.sort((a,b) => {
    if(a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }

});

console.log(numeros);