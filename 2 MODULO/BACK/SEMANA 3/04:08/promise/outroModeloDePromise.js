//Outro modelo de Promise
const fs = require("fs/promises");

fs.readFile("texto.txt")
    .then((data) => fs.writeFile("novoTexto.txt", data))
    .then(() =>{
        console.log("Escrita completa"); 
    })
    .catch((err) =>{
        console.log("Erro:", err);
});



// fs.readFile("texto.txt",(err, data) =>{
//     if(err){
//         console.log("Erro:",err);
//     }else{
//         console.log("Leu com sucesso");
//         fs.writeFile("novoTexto.txt", data,(err) => {
//             if(err){
//                 console.log("Erro na escrita:", err);
//             }else{
//                 console.log("Escreveu com sucesso");
//             }
//         });
//     }
// });
