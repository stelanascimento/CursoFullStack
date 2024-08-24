const express = require("express");
const axios = require("axios");


const app = express();




app.get("/descrever/:pacote",async(req,res) =>{

    const pacote = req.params.pacote;

    const promise = axios.get(`https://registry.npmjs.com/${pacote}`);
    const response = await promise;
        
    res.json({  
        descricao: response.data.description,
    });

   

});





// app.get("/descrever/:pacote",(req,res) =>{

//     const pacote = req.params.pacote;

//     const promise = axios.get(`https://registry.npmjs.com/${pacote}`);
//     promise.then((response) => {   //response eh a resposta do axios
//         res.json({    //res eh a resposta do express q tenho q enviar
//             descricao: response.data.description,
//         });

//     });

// });

app.listen(8080);