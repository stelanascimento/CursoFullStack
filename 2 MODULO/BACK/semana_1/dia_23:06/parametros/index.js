const express = require("express");

const app = express();

// GET /livros/1
//GET /livros/2
//GET /livros/3

app.get("/livros/:numero/capitulos/:cap",(req,res) => {
    console.log(req.params);

    if(req.params.numero === "1"){
        res.send("Livro Um");
    }else if(req.params.numero === "2"){
        res.send("Livro Dois");
    }else if(req.params.numero === "3"){
        res.send("Livro Tres")
    }else{
        res.status(404);
        res.send("Livro   " + req.params.numero + "   nao existe.");
    }
});

// app.get("/livros/1",(req,res) => {
//     res.send("Livro Um");
// });
// app.get("/livros/2",(req,res) => {
//     res.send("Livro Dois");
// });
// app.get("/livros/3",(req,res) => {
//     res.send("Livro Tres");
// });

app.listen(8000);