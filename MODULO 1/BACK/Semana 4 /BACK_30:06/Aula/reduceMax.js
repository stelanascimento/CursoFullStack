const array = [4,8,9,30,87,44];

//ENCONTRAR O MAIOR ITEM DESSE ARRAY

const maior = array.reduce((acc,item) => item > acc ? item : acc );
//TERNARIO
console.log(maior);