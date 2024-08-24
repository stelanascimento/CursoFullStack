const express = require("express");

const app = express();

//GET /contador --> 4

let contador = 0;

app.get("/contador",(req,res) => {
    contador = contador + 1;

    res.send("Voce ja abriu esta pagina  " + contador + "  vez(es)" );
});


app.get("/zerar",(req, res) => {
    contador = 0;
    res.send("Zerei!");
});

app.get("/atribuir",(req,res) => {
    console.log("conatdor era  " + contador);
    const valor = req.query.valor;

    if(valor === undefined){
        res.status(400);
        res.end("Voce precisa informar o valor");
    }else{
        contador = Number(valor);

        console.log("contador agora eh   " + contador);

        res.send("Atribuido com sucesso");

    }

    
});



app.listen(8000);