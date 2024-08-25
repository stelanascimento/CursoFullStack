const conexao = require('../conexao');
const securePassword = require("secure-password");
const jwt = require("jsonwebtoken");
const jwSecret = require("../jwt_secret");

const pwd = securePassword();

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }
    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    }
    if (!senha) {
        return res.status(400).json("O campo senha é obrigatório.");
    }

    try {
        const query = 'select * from usuarios where email = $1';
        const usuario = await conexao.query(query, [email]);

        if (usuario.rowCount > 0) {
            return res.status(400).json('Este email ja foi cadastrado.');
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }


    try {  //criar hash e salvar no usuario essa hash
        const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
        const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3)';
        const usuario = await conexao.query(query, [nome, email, hash]);

        if (usuario.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o Usuario');
        }

        return res.status(200).json('Usuario cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }

};



const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    }
    if (!senha) {
        return res.status(400).json("O campo senha é obrigatório.");
    }

    try {  //consulta usuario,buca ele
        const query = 'select * from usuarios where email = $1';
        const usuarios = await conexao.query(query, [email]);

        if (usuarios.rowCount === 0) {
            console.log(usuarios.rows[0]);
            return res.status(400).json('Email ou senha incorretos.');

        }
        
        const usuario = usuarios.rows[0];

        //Verificando a senha!
        const result = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, "hex")); 
  
        switch (result) {  // 4 casos de verificacao
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
            return res.status(400).json('Email ou senha incorretos.');
            case securePassword.VALID:
                break;
            case securePassword.VALID_NEEDS_REHASH:
                try {
                    const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
                    const query = 'update usuarios set senha = $1 where email = $2';
                    await conexao.query(query, [ hash, email]);
                    // Save improvedHash somewhere
                } catch{
                }
                break;
        }

        // Produzo um token
        const token = jwt.sign({ // eu assino e eu mesmo verifico a minha propria assinatura
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }, jwSecret, {
            expiresIn: "2h"
        });// segundo parametro eh uma chave
        
        return res.send(token);

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = 
{ 
    cadastrarUsuario ,
    login
};