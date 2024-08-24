const conexao = require('../conexao');

//Exercicio resolvido: para cada autor na listagen,
// faca a listagem de seus respectivos livros.

const listarAutores = async (req, res) =>{
    try{
        const { rows: autores } = await conexao.query('select * from autores');

        for(const autor of autores){
            const { rows:  livros } = await conexao.query('select * from livros where autor_id = $1', [autor.id]);
            autor.livros = livros;
        }

        return res.status(200).json(autores);
    }catch{
        return res.status(400).json(error.message);
    }
}

const obterAutor = async (req, res) =>{
    const { id } = req.params;
    try{
        const autor = await conexao.query('select * from autores where id = $1', [id]);

        if(autor.rowCount === 0){
            return res.status(404).json('Autor nao encontrado');
        }

        return res.status(200).json(autor.rows[0]);
    }catch{
        return res.status(400).json(error.message);
    }

}

const cadastrarAutor = async (req, res) =>{
    console.log(req.body);
    const { nome, idade } = req.body;

    if(!nome){
        return res.status(400).json('O ponto nome eh obrigatorio');
    }
    try {
        const query = 'insert into autores (nome, idade) values ($1, $2)';
        const autor = await conexao.query(query, [nome, idade]);

        if(autor.rowCount === 0 ){
            return res.status(400).json('Nao foi possivel cadastrar o autor');
        }
        return res.status(200).json('Autor Cadastrado cm Sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
        
    }
}

const atualizarAutor = async (req, res) =>{
    const { id } = req.params;
    const { nome, idade } = req.body;

    try{
        const autor = await conexao.query('select * from autores where id = $1', [id]);

        if(autor.rowCount === 0){
            return res.status(404).json('Autor nao encontrado');
        }
        if(!nome){
            return res.status(400).json('O ponto nome eh obrigatorio');
        }

        const query = 'update autores set nome = $1, idade = $2 where id = $3';
        const autorAtualizado = await conexao.query(query, [nome, idade, id]);

        if(autorAtualizado.rowCount === 0){
            return res.status(404).json('Nao foi possivel atualizar o autor');
        }

        return res.status(200).json('Autor foi atualizado com sucesso.');
    }catch(error){
        return res.status(400).json(error.message);
    }


}


const excluirAutor = async (req, res) =>{
    const { id } = req.params;
    
    try{
        const autor = await conexao.query('select * from autores where id = $1', [id]);

        if(autor.rowCount === 0){
            return res.status(404).json('Autor nao encontrado');
        }
        const query = 'delete from autores where id = $1';
        const autorExcluido = await conexao.query(query, [id]);

        if(autorExcluido.rowCount === 0){
            return res.status(404).json('Nao foi possivel excluir o autor');
        }

        return res.status(200).json('Autor excluido');
    }catch(error){
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