// email deve ser valido - faz isso no html
// as senhas tem q ser iguais.

const form = document.querySelector('form');
const inputSenha = document.querySelector('#senha');
const inputRepitasenha = document.querySelector('#repita-senha');

form.addEventListener('submit', function(event) {
    if(inputSenha.value !== inputRepitasenha.value){
        event.preventDefault();
    }
})