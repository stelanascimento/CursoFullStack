// const lodash = require("lodash");  // posso importar as funcoes do lodash
// //require("lodash")  => retorna um objeto lodash,que tem muitas funcoes dentro dele.

const { size } = require("lodash");  //desestruturacao
// const aaa = require("./somar"); //importando um arquivo
// console.log(aaa.calculaSoma([1,2,3]));

const { calculaSoma } = require("./somar");

console.log(calculaSoma([1,2,3]));

//console.log(lodash.size([1,2,2,5]));
console.log(size([1,2,2,5]));
