const conexao = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => 
{
    const { nome, email, senha} = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }
    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    }
    if (!senha) {
        return res.status(400).json("O campo senha é obrigatório.");
    }


    //VALIDAR EMAIL
    try 
    {
        const queryConsultaEmail = 'select * from usuarios where email = $1';
        const { rowCount: quantidadeUsuarios} = await conexao.query(queryConsultaEmail, [email]);

        if (quantidadeUsuarios > 0) 
        {
            return res.status(400).json('Ja existe usuario cadastrado com e-mail informado.');
        }

        
        //Criptografar senha
        const senhaCriptografada = await bcrypt.hash(senha, 10); // por padrao colocar a 10
        //esse segundo parametro eh o custo de geracao de uma hash.
        const query = 'insert into usuarios (nome, email, senha) values($1, $2, $3)';
        const usuarioCadastrado = await conexao.query(query, [nome, email, senhaCriptografada]);
        
        if(usuarioCadastrado.rowCount === 0)
        {
            return res.status(400).json('Ja existe usuario cadastrado com e-mail informado.');
        }

        return res.status(200).json('Usuario cadastrado com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}



module.exports = 
{ 
    cadastrarUsuario 
};