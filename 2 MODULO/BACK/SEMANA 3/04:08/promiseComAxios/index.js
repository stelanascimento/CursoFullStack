const axios = require("axios");

const cepPromise = axios.get("https://viacep.com.br/ws/50720535/json/");

 cepPromise.then((response) => {  // a resposta a gente recebe.
     console.log(response.data);
 })

 console.log(cepPromise);  //promessa - pending