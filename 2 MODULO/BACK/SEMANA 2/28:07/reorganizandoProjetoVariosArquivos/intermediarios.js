function logarRequisicao(req,res,next){
    console.log("Eu sou o intermediario");
    console.log("O corpo da mensagem eh :",req.body);
    next();    //next encaminha pro proximo membro da lista,proximo intermediario ou roteador

    // console.log(req.method,req.url);   //exibir o metodo e a url da requisicao

    // if(req.method === "DELETE"){
    //     res.send("NAO PODE! FEIO");
    // }else{
    //     next();
    // }

}

function travaDeSenha(req, res, next){
    console.log("Segundo intermediario", req.query);
    if(req.method === "GET" || req.query.senha === "123456"){
        next();
    }else{
        res.status(401);
        res.json({erro: "senha incorreta"});
    }

}

module.exports = {
    logarRequisicao,
    travaDeSenha,
}