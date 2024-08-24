// NOSSO SERVIDOR
const express = require("express");
const roteador = require("./roteador");
const {logarRequisicao,travaDeSenha} = require("./intermediarios");

const app = express();
app.use(express.json());  //Para que o express seja capaz de receber(ler o body) informacoes JSON, vindas do http cliente.E transformar em um objeto javaScript.
app.use(logarRequisicao);
app.use(travaDeSenha);
app.use(roteador);  //usar um roteador,encaminha para os controladores.

app.listen(8000);