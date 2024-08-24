const array = [1,2,3,4,5,6,7,8];

const somaTotal = array.reduce((acc,item) => acc + item); 
//fazendo sem passar o valor inicial primeiro, que seria o acumulador
//logo o acumulador recebe o array[0]
// e item recebe o array[1],se acumulador tivesse recebi valor ,item seria array[0]
console.log(somaTotal);





// let somaTotal = array[0];
// for(let i=1; i < array.length;i++){
//      somaTotal = somaTotal + array[i];
// }
// console.log(somaTotal);