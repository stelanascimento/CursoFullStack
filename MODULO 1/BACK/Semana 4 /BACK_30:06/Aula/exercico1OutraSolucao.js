//verificar na lista de precos se esta tudo em centavos e se os numeros sao positivos
//Faca um programa que verifica se todos os elementos da lista sao numeors inetiros e positivos

const precos = [100,131,2542.5];

// const resto = 1.25 % 1;
// console.log(resto);

// const ehInteiro = resto === 0; //pra ver se eh inetiro



const ehValido = precos.every(x => x >= 0 && x === Math.floor(x));

console.log(ehValido);