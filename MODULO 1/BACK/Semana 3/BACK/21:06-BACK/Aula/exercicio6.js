function obterFaixaEtaria(idade){
    if(idade < 25){
        return "jovem";
    }else if(idade < 65){
        return "adulto";
    }else{
        return "idoso";
    }
}
function apresentar(pessoa){

    const faixaEtaria = obterFaixaEtaria(pessoa.idade);
    console.log(`Ola meu nome eh ${pessoa.nome},sou um ${faixaEtaria} de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    
}

let joao ={
    nome: "Joao",
    idade: 44,
    profissao: "Estudante",
    altura: 1.92
};
let jose = {
    nome: "Jose",
    idade: 12,
    profissao: "atleta",
    altura: 1.40
};
let pedro = {
    nome: "Pedro",
    idade: 72,
    profissao: "aposentado",
    altura: 1.66
};

apresentar(jose);
apresentar(joao);
apresentar(pedro);
