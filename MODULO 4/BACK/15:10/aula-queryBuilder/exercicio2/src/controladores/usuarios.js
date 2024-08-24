const knex = require('../conexao');

const listar = async (req, res) => {
    
    try {
        const usuario = await knex('usuarios');
        return res.status(200).json(usuario);
        
    } catch (error) {
        console.log('entrei no cacth')
        return res.status(400).json(error.message)
    }
}

const obter = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await knex('usuarios').where({ id }).first();

        if(!usuario) {
            return res.status(404).json('Usuario nao encontrado');
        }

        return res.status(200).json(usuario);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrar = async (req, res) => { 
    const { nome, email, senha } =  req.body;

    if(!nome){
        return res.status(404).json('O campo nome eh obrigatorio');
    }
    if(!email){
        return res.status(404).json('O campo email eh obrigatorio');
    }
    if(!senha){
        return res.status(404).json('O campo senha eh obrigatorio');
    }
    
    try {
        const usuario = await knex('usuarios').insert({ nome, email, senha }).returning('*');

        if(usuario.length === 0){
            return res.status(400).json('Nao foi possivel cadastrar o usuario');
        }
        console.log('Entrei no try')

        return res.status(200).json(usuario[0]);
    } catch (error) {
        console.log('Entrei no catch')

        return res.status(400).json(error.message);
    }
}

const atualizar = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    try {
        const usuarioExiste = await knex('usuarios').insert({ nome, email, senha }).returning('*');

        if(!usuarioExiste){
            return res.status(400).json('Usuario nao encontrado');
        }

        const usuario = await knex('usuarios').update({nome, email, senha}).where({id});

        if(!usuario){
            return res.status(400).json('Nao foi possivel atualizar o usuario');
        }

        return res.status(200).json(usuario[0]);
    } catch (error) {
        console.log('Entrei no catch')

        return res.status(400).json(error.message);
    }

}

const excluir = async (req, res) => { 
}



module.exports = 
{ 
    listar,
    obter,
    cadastrar,
    atualizar,
    excluir
};