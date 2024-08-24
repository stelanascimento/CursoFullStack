const fs = require("fs");

//const buffer = fs.readFileSync("./texto.txt"); //sincrono
console.log("Vou comecar a ler o arquivo");

fs.readFile('./texto.txt',(err,data) => { //assincrono, 2 coisas podem acontecer pode dar erro ou pode nao dar erro(data)
    if(!err){
        console.log(data.toString());
    }
});

console.log("Opa");
