const axios = require('axios');

const instanciaAxios = axios.create({   //Passar um objeto de configuracao
    baseURL: 'https://api.pagar.me/1/',
    params: {
        api_key: 'ak_test_nurPvAepv7yNJhoVL9NfpcsbbNTucG'    //geralmente a pagar.me que gera
    }
    

});

module.exports = instanciaAxios;