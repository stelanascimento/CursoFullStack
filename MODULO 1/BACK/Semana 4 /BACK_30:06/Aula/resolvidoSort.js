const numeros =[1,10,2,23,5];
//ordenar em ordem decrescente

//return
// - a vem primeiro (menor)
// + b vem primeiro (maior)
numeros.sort((a,b) => b - a);

    // if(a > b){
    //     return -1;
    // }else if(b > a){
    //     return 1;
    // }else{
    //     return 0;
    // }

console.log(numeros);