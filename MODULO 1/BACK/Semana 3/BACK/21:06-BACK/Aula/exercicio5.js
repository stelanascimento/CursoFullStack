function apresentar(pessoa){
    if(pessoa.idade < 25){
        console.log(`Ola meu nome eh ${pessoa.nome},sou uma jovem de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    }else if(pessoa.idade < 66){
        console.log(`Ola meu nome eh ${pessoa.nome},sou um adulto de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    }else{
    console.log(`Ola meu nome eh ${pessoa.nome},sou um idoso de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    }
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
    idade: 60,
    profissao: "aposentado",
    altura: 1.66
};

apresentar(jose);
apresentar(joao);
apresentar(pedro);
