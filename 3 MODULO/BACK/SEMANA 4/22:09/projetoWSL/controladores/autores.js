const conexao = require('../conexao');
const jwt = require("jsonwebtoken");
const jwSecret = require("../jwt_secret");
const jwt_secret = require('../jwt_secret');

// Exercício resolvido: para cada autor na listagem,
// faça a listagem de seus respectivos livros.

const listarAutores = async (req, res) => {
    try {
        const { rows: autores } = await conexao.query('select * from autores');

        for (const autor of autores) {
            const { rows: livros } = await conexao.query('select * from livros where autor_id = $1', [autor.id]);
            autor.livros = livros;
        }

        return res.status(200).json(autores);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterAutor = async (req, res) => {
    const { id } = req.params;
    try {
        const autor = await conexao.query('select * from autores where id = $1', [id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        return res.status(200).json(autor.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarAutor = async (req, res) => {
    const { nome, idade, token } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }
    if (!token) {
        return res.status(400).json("O campo token é obrigatório.");
    }

    //verificar token
    try {
        const usuario = jwt.verify(token, jwt_secret);
        console.log(`${usuario.nome} esta criando um autor`)

    } catch {
        return res.status(400).json("O token fornecido eh invalido.")
        
    }

    try {
        const query = 'insert into autores (nome, idade) values ($1, $2)';
        const autor = await conexao.query(query, [nome, idade]);

        if (autor.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o autor');
        }

        return res.status(200).json('Autor cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarAutor = async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    try {
        const autor = await conexao.query('select * from autores where id = $1', [id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        if (!nome) {
            return res.status(400).json("O campo nome é obrigatório.");
        }

        const query = 'update autores set nome = $1, idade = $2 where id = $3';
        const autorAtualizado = await conexao.query(query, [nome, idade, id]);

        if (autorAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o autor');
        }

        return res.status(200).json('Autor foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
    
}

const excluirAutor = async (req, res) => {
    const { id } = req.params;

    try {
        const autor = await conexao.query('select * from autores where id = $1', [id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        const condicaoExclusao = 'select * from livros where autor_id = $1';
        const existeLivro = await conexao.query(condicaoExclusao, [autor.rows[0].id]);
        if (existeLivro.rowCount > 0) {
            return res.status(404).json('Não foi possível excluir autor que possui livros cadastrados');
        }

        const query = 'delete from autores where id = $1';
        const autorExcluido = await conexao.query(query, [id]);

        if (autorExcluido.rowCount === 0) {
            return res.status(404).json('Não foi possível excluir o autor');
        }

        return res.status(200).json('Autor foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarAutores,
    obterAutor,
    cadastrarAutor,
    atualizarAutor,
    excluirAutor
}