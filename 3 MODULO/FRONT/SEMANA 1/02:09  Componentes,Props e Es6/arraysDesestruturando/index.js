//Desestruturacao de arrays
const meses = ['Janeiro','Fevereiro','Marco', 'Abril'];

// const janeiro = meses[0];
// const fevereiro = meses[1];
// const marco = meses[2];
// const abril = meses[3];

const[, , , abril] = meses;

console.log(meses);
// console.log(janeiro);
// console.log(fevereiro);
// console.log(marco);
console.log(abril);