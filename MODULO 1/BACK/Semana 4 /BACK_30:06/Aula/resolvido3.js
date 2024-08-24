const array = [2,3,5,9];
// x eh um item do array


const resultado = array.some( x =>  Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0);

console.log(resultado);