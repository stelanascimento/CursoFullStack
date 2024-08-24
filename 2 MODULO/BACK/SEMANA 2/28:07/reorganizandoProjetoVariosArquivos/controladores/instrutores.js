const listaDeInstrutores = require("../dados/instrutores");

const areasDeAtuacaoValidas = [
    "Logica",
    "Back-End",
    "Full-Stack",
    "Front-end",
    "Flutter",
    "Soft Skills",
    "UI/UX"
];

function consultarTodosOsInstrutores(req,res){
    res.json(listaDeInstrutores);
}

function consultarUmInstrutor(req,res){
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));

    //VALIDACAO DE DADOS NESSE CONTROLER
    if(!instrutor){ // Se der undefined queremos responder com uma mensagem de erro.
        //  !instrutor significa que ele nao eh um valor concreto,vai ser ou undefined ou null.
        res.status(404);
        res.json({erro: "Instrutor " + req.params.idConsultado + " nao existe."});
        return;  // para finalizar a funcao se entrar no if.
    }
    res.json(instrutor);
}

let proximoId = 5 ; 

function validarInstrutor(instrutor){  // vai receber o instrutor e vai validar se esse instrutor
    //ta correto ou nao e se estiver incorreto vai retornar  um erro.
    // o instrutor vai ser req.body
    if(!instrutor.nome){
        return "O campo nome eh obrigatorio."; //finalizar a funcao
    }
    if(!instrutor.idade){
        return "O campo idade eh obrigatorio.";//finalizar a funcao
    }
    if(!instrutor.areaDeAtuacao){
        return "O campo areaDeAtuacao eh obrigatorio."; //finalizar a funcao
    }
    if(typeof  instrutor.nome !== "string"){
        return "O campo nome deve ser preenchido com um texto.";
    }
    if(typeof  instrutor.idade !== "number"){
        return "O campo idade deve ser preenchido com um numero.";
    }
    if(typeof  instrutor.areaDeAtuacao !== "string"){
        return "O campo areaDeAtuacao deve ser preenchido com um texto.";
    }

    if(instrutor.idade < 18){
        return "O Instrutor deve ser maior de idade.";
    }

    if(!areasDeAtuacaoValidas.includes(instrutor.areaDeAtuacao)){
        return "A area de atuacao informada eh invalida.";
    }

    if(!instrutor.nome.includes(" ")){
        return "O nome deve conter primeiro nome e sobrenome."
    }
}


function criarInstrutor(req,res){
    const erro = validarInstrutor(req.body); // req.body seria o instrutor

    if(erro){
        res.status(400);
        res.json({ erro });
        return;
    }

    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao:req.body.areaDeAtuacao,
    };
    listaDeInstrutores.push(novoInstrutor);

    proximoId++;

    res.json(novoInstrutor); 
}

////////////////////////////////////////////////

function editarInstrutor(req,res){
    const instrutor = listaDeInstrutores.find(
        (instrutor)  => instrutor.id === Number(req.params.idConsultado)
    );
    if(!instrutor){ // Se der undefined queremos responder com uma mensagem de erro.
        //  !instrutor significa que ele nao eh um valor concreto,vai ser ou undefined ou null.
        res.status(404);
        res.json({erro: "Instrutor " + req.params.idConsultado + " nao existe."});
        return;  // para finalizar a funcao se entrar no if.
    }
    //verificar os campos que estao preenchidos, se estao corretos
    const erro = validarInstrutor({    //faz isso pq nao tem todos os campos
        nome: req.body.nome  ?? instrutor.nome,  //use o primeiro que existir
        idade: req.body.idade ?? instrutor.idade,
        areaDeAtuacao: req.body.areaDeAtuacao ?? instrutor.areaDeAtuacao,
        // idade: req.body.idade === undefined ? instrutor.idade : req.body.idade,
    });

    if(erro){
        res.status(400);
        res.json({ erro });
        return;
    }
    
    if(req.body.nome !== undefined){
        instrutor.nome = req.body.nome;  
    }

    if(req.body.idade !== undefined){
        instrutor.idade = req.body.idade;
    }

    if(req.body.areaDeAtuacao !== undefined){
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    }

    res.json(instrutor);
}

function substituirInstrutor(req,res){
    const erro = validarInstrutor(req.body); // req.body seria o instrutor

    if(erro){
        res.status(400);
        res.json({ erro });
        return;
    }

    if(req.body.id !== Number(req.params.idConsultado)){
        res.status(400);
        res.json({erro: "O campo 'id' deve ser igual na rota e no corpo da requisicao."});
    }


    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );
    
    if(instrutor){
        //substituir o existente
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
        res.json(instrutor);
    }else{
        //inserir => parece cm POST
        const novoInstrutor = req.body;
        listaDeInstrutores.push(novoInstrutor);
        res.json(novoInstrutor);
    }
}

function excluirInstrutor(req,res){ // OBS: so podemos excluir instrutores que existem
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );

    if(!instrutor){
        res.status(404);
        res.json({ erro: "Instrutor " + req.params.idConsultado + " nao existe."});
        return;
    }

    const indice = listaDeInstrutores.indexOf(instrutor);
    
    listaDeInstrutores.splice(indice,1);

    res.json(instrutor);
}


module.exports = { 
    consultarTodosOsInstrutores,
    consultarUmInstrutor,
    criarInstrutor,
    editarInstrutor,
    substituirInstrutor,
    excluirInstrutor,
    };

