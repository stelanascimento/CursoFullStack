const array = [1,2,3,4,5,6,7,8];

let somaTotal = array[0];

for(let i=1; i < array.length;i++){
     somaTotal = somaTotal + array[i];
}
console.log(somaTotal);