//min
//maximo
//array de valores
//novo array c/ valores permitidos
const min = 2;
const max =10;
const valores =[0,5,6,10,11];

const novoArray = [];

for(let valor of valores){
    if(valor >= min && valor <= max){
        novoArray.push(valor);
    }
}
console.log(novoArray);