const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const segredo = require('../segredo');




const login = async (req, res) => {
    const { email, senha } = req.body;
    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    }
    if (!senha) {
        return res.status(400).json("O campo senha é obrigatório.");
    }

    try {
        const queryVerificaEmail = `select * from 
        usuarios where email = $1`;
        const { rows, rowCount} = await conexao.query(queryVerificaEmail, [email]);

        if(rowCount === 0){
            return res.status(404).json('Usuario nao encontrado.');
        }

        const usuario = rows[0];

        const senhaVerificada = await bcrypt.compare(senha, usuario.senha);

        if(!senhaVerificada){
            return res.status(400).json('Email e senha nao confere');
        }

        //gerar token
        const token = jwt.sign({ 
            id: usuario.id
        }, segredo,{ expiresIn: '1d'});

        const {senha: senhaUsuario, ...dadosUsuarios} = usuario; //desestruturando p nao mostrar senha

        return res.status(200).json({
            usuario: dadosUsuarios,
            token
        })

    } catch (error) {
        return res.status(400).json(error.message);
    }
    
}

module.exports = {
    login
}