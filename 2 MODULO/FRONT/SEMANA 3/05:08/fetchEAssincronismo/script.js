//A validacao tem q estar no minimo antes da requisicao

const cepInput = document.querySelector("#cep");
const ufInput = document.querySelector("#uf");
const cidadeInput = document.querySelector("#cidade");
const ruaInput = document.querySelector("#rua");

cepInput.addEventListener("change", function () {
  if(cepInput.value.length !== 8){ // aqui as vezes
    console.log('ERRO');
    return;
  }



  const promiseResposta = fetch(
    "https://viacep.com.br/ws/" + cepInput.value + "/json/"
  ); // o input q vamos colocar no fetch sera a url que queremos fazer a requisicao

  promiseResposta.then(function (resposta) {
    if(!resposta.ok){   //aqui sempre
      console.log('ERRO');
      return;
    }

    const promiseBody = resposta.json();

    promiseBody.then(function (body) {
      if(body.erro){
        console.log('ERRO');
        return;
      }

      console.log(body);
      ufInput.value = body.uf;
      cidadeInput.value = body.localidade;
      ruaInput.value = body.logradouro;
    });
  });
});
