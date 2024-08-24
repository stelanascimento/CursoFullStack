const array = [0,1,2,3,4,5,6,7,8];

const somaTotal = array.reduce((acc,item) => {
    acc = acc + item;
    return acc;
}); 

console.log(somaTotal);

