const express = require('express');
const pedidos = require('./controladores/pedidos');


const rotas = express();

//Primeiro EndPoint
rotas.post('/criar-pedido', pedidos.criarPedido);

//outro EndPoint
rotas.get('/consultar-pedido/:id',pedidos.consultarPedido);

module.exports = rotas;