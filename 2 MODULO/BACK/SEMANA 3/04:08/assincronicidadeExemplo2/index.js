//quero ler o arquivo texto.txt e copiar em outro arquivo.
// forma assincrona
const fs = require("fs");

fs.readFile("texto.txt",(err,data) => {
    if(err){
        console.log("Erro:",err);
    }else{
        console.log("Leu com sucesso")
        fs.writeFile("novoTexto1.txt",data,(err) =>{
            if(err){
                console.log("Erro na escrita:",err)
            }else{
                console.log("Escreveu com sucesso 1");
            }
        });

        fs.writeFile("novoTexto2.txt",data,(err) =>{
            if(err){
                console.log("Erro na escrita:",err)
            }else{
                console.log("Escreveu com sucesso 2");
            }
        });

    }

});

