const express = require('express');
const autores = require('./controladores/autores');
const livros = require('./controladores/livros');

const rotas = express();

//Rotas de Autores
rotas.get('/autores', autores.listarAutores); //listagem de autores
rotas.get('/autores/:id',autores.obterAutor);  //obter apenas 1 autor
rotas.post('/autores', autores.cadastrarAutor);  // cadastrar um autor
rotas.put('/autores/:id', autores.atualizarAutor);  // atualizar um autor
rotas.delete('/autores/:id', autores.excluirAutor); //deletar um autor

//Rotas de Livros
rotas.get('/livros', livros.listarLivros); //listagem de livros
rotas.get('/livros/:id', livros.obterLivro);  //obter apenas 1 livro
rotas.post('/livros', livros.cadastrarLivro);  // cadastrar um livro
rotas.put('/livros/:id', livros.atualizarLivro);  // atualizar um livro
rotas.delete('/livros/:id', livros.excluirLivro); //deletar um livro




module.exports = rotas;