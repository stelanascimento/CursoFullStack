function verificarMaioridade(nome,idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}


let nome2 = "Natalie";
let idade2 = 23;

let ehMaiordeIdade = verificarMaioridade(nome2,idade2);
console.log(ehMaiordeIdade);
