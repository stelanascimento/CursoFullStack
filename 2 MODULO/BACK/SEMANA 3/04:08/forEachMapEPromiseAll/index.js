//Conclusao nao use forEach numa funcao async

//O ideal eh usar for of
const axios = require("axios");

async function obterLogradouro2(cep){
    //await
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data.logradouro;
}
async function exibirLogradouros1(ceps){
    for(const cep of ceps){
        console.log(cep, "=>",await obterLogradouro2(cep));

    }
}
async function exibirLogradouros2(ceps){
    ceps.forEach(async (cep) => {            //a funcao de dentro pra usar await , tem q ser funcao async
        console.log(cep, "=>",await obterLogradouro2(cep));


    });
}
async function exibirLogradouros3(ceps){
    const list = ceps.map(async (cep) => {    //map vai pegar uma lista de strings e transformar numa lista de promessas.
        console.log(cep, "=>",await obterLogradouro2(cep));
    });
    console.log(list);
}
async function exibirLogradouros4(ceps){// Com Promise.all a ordem eh imprevisivel.
    await Promise.all( ceps.map(async (cep) => {    //map vai pegar uma lista de strings e transformar numa lista de promessas.
        console.log(cep, "=>",await obterLogradouro2(cep));
    }));

    //const finalPromise = Promise.all(list);// funcao utilitaria,que recebe uma lista de promessas , e retorna uma promessa quando todas as promessas
    //da lista se resolvem.
}

exibirLogradouros4(["40140650","50720535"]).then(() => console.log("FIM"));

