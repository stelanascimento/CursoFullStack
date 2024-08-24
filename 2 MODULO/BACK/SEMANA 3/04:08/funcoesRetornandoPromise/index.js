//Biblioteca Axios so trabalha com Promessas

const axios = require("axios");

function obterLogradouro(cep){
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const logradouroPromise = responsePromise
        .then( (response)  => response.data.logradouro
        );
    return logradouroPromise; // essa funcao retorna uma promessa para o logradouro
}

obterLogradouro("40140650").then(logradouro => console.log(logradouro));
obterLogradouro("50720535").then(logradouro => console.log(logradouro));








