// Usuarios tem q ter uma senha com pelos menos 1 letra e 1 numero
//alem dos 8 caracteres q coloquei no html
const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numeros = '0123456789'.split('');

const inputSenha = document.querySelector('#senha'); //para selecionar id usamos hastag


inputSenha.addEventListener('change', function(){

    const senha = inputSenha.value;
    let temLetra = false;
    let temNumero = false;

    console.log("Entrei na funcao!!!!!");
    console.log(senha);

    for (let i = 0 ; i < senha.length; i++ ){
        if(letras.includes(senha[i])){
            temLetra = true;
            continue;
        }

        if(numeros.includes(senha[i])){
            temNumero = true;
            continue;
        }
    }

    if(temLetra && temNumero){
        console.log('Senha Valida');
    }else{
        console.log('Senha Invalida.');
    }
})