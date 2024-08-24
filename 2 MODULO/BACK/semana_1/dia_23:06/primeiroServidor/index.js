const express = require("express");

const app = express(); //criando uma aplicacao

app.get("/",(req,res) => { // req => reuisicao ,res => resposta
    console.log("Recebi um GET /");

    res.send("Ola!");

});

app.get("/primeiroServidor",(req,res) => { // outra rota
    console.log("Recebi meu outro GET /");

    res.send("Meu segundo Servidor alterado !!!");

});

app.listen(8000);

//criar uma aplicacao

//configurar a aplicacao, pra quando receber uma requisicao do tipo GET
//fazer a acao de dentro da funcao
//e enviar a resposta ola 

// vou mandar essa aplicacao escutar a porta 8000.
