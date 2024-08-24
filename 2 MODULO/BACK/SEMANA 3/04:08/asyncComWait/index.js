// funcoes async sempre retornam uma promessa, ai tem q usar await.
//await faz as coisas numa ordem controlada.

const axios = require("axios");

function obterLogradouro(cep){
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const logradouroPromise = responsePromise
        .then( (response)  => response.data.logradouro
        );
    return logradouroPromise; // essa funcao retorna uma promessa para o logradouro
}


async function obterLogradouro2(cep){
    //await
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data.logradouro;
}

async function exibirLogradouros(ceps){
    for(const cep of ceps){
        console.log(await obterLogradouro2(cep));
    }
}

exibirLogradouros(["40140650","50720535"]);

// obterLogradouro2("40140650").then((logradouro) => console.log(logradouro));
// obterLogradouro2("50720535").then(logradouro => console.log(logradouro));


// obterLogradouro("40140650").then(logradouro => console.log(logradouro));
// obterLogradouro("50720535").then(logradouro => console.log(logradouro));
