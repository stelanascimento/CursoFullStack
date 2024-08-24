const express = require("express");

const app = express();
app.use(express.json());  //Para que o express seja capaz de receber informacoes JSON, vindas do http cliente.

//  GET /instrutores     => esse get vai me retornar a lista de todos os instrutores.
//  GET /instrutores/2    => vai me retornar o instrutor de numero 2
// POST,PATCH, PUT, DELETE

const listaDeInstrutores = [
    {
        id: 1,
        nome: "Junior",
        idade: 29,
        areaDeAtuacao: "Logica",
    },
    {
        id: 2,
        nome: "Dina" ,
        idade: 19,
        areaDeAtuacao: "Back-end",
    },
    {
        id: 3,
        nome: "Guido Cerqueira" ,
        idade: 30,
        areaDeAtuacao: "Full-stack",
    },
    {
        id: 4,
        nome: "Victor Magalhaes" ,
        idade: 28,
        areaDeAtuacao: "Front-end",
    },
];

let proximoId = 5 ;  //variavel auxiliar 

app.get("/instrutores",(req,res) => {
    // res.send("jbdjbdjbjd"); esse send eh pra enviar texto ou html ou informacao textual.
    // no express tbm podemos responder cm dados , tipo objeto por exemplo
    // so usar o .json 

    res.json(listaDeInstrutores);

});

app.get ("/instrutores/:idConsultado" ,(req,res) => {
    console.log("Consultando o id", req.params.idConsultado);

    //  "3" !== 3
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));
    res.json(instrutor);
});

//  POST /instrutores
app.post("/instrutores", (req,res) => {
    console.log(req.body); //Eu vou poder consultar qual eh esse body(a coisa que vou estar recebendo da requisicao).
    
    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao:req.body.areaDeAtuacao,
    };
    listaDeInstrutores.push(novoInstrutor);

    proximoId++;

    res.json(novoInstrutor); 
});


// PATCH /instrutores/3
app.patch("/instrutores/:idConsultado",(req,res) => {
    const instrutor = listaDeInstrutores.find(
        (instrutor)  => instrutor.id === Number(req.params.idConsultado)
    );
    
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

});

// PUT
app.put("/instrutores/:idConsultado",(req,res) => {
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
});

//DELETE
app.delete("/instrutores/:idConsultado",(req, res) =>{
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );

    const indice = listaDeInstrutores.indexOf(instrutor);
    
    listaDeInstrutores.splice(indice,1);

    res.json(instrutor);

});

app.listen(8000);