const fs = require("fs");

//const buffer = fs.readFileSync("./texto.txt"); //sincrono
console.log("Vou comecar a ler o arquivo");

const buffer = fs.readFile('./texto.txt',function(err,data){ //assincrono, 2 coisas podem acontecer pode dar erro ou pode nao dar erro(data)
    if(!err){
        console.log(data.toString());
    }



});

console.log("Opa");



// console.log(buffer.toString());