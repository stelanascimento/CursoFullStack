// Promise
//
const fs = require("fs/promises");

const leituraDoArquivo = fs.readFile("texto.txt").then(data => {
        console.log("Termminei de ler:", data.toString());
    })
    .catch((err) =>{  // capturar o erro, para poder exibir o erro(se o erro existir)
        console.log("Erro:", err);
});// criando a promessa

console.log(leituraDoArquivo);   // a promessa pendente



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