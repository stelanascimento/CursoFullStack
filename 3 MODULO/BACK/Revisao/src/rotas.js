const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const postagens = require('./controladores/postagens');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();



rotas.post('/cadastrar', usuarios.cadastrarUsuario);

rotas.post('/login', login.login);


// //Exemplo de por rota de intermediario
// rotas.post('/postagens',verificaLogin, postagens.cadastrarPostagem);

//feed principal
rotas.get('/', postagens.todasPostagens);

rotas.use(verificaLogin);

//postagens
rotas.get('/postagens', postagens.postagensUsuario);
rotas.post('/postagens', postagens.cadastrarPostagem);
rotas.patch('/postagens/:id', postagens.atualizarPostagem);
rotas.delete('/postagens/:id', postagens.excluirPostagem);











module.exports = rotas;