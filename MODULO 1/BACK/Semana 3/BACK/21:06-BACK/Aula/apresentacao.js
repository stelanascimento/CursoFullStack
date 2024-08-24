const pessoa ={
    nome: "Joao",
    idade: 44,
    profissao: "Estudante",
    altura: 1.92
};

if(pessoa.idade < 25){
    console.log(`Ola meu nome eh ${pessoa.nome},sou uma jovem de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}else if(pessoa.idade < 60){
    console.log(`Ola meu nome eh ${pessoa.nome},sou um adulto de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}else{
console.log(`Ola meu nome eh ${pessoa.nome},sou um idoso de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}


pessoa = {
    nome: "Igor",
    idade: 12,
    profissao: "atleta",
    altura: 1.40
};
if(pessoa.idade < 25){
    console.log(`Ola meu nome eh ${pessoa.nome},sou uma jovem de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}else if(pessoa.idade < 60){
    console.log(`Ola meu nome eh ${pessoa.nome},sou um adulto de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}else{
console.log(`Ola meu nome eh ${pessoa.nome},sou um idoso de ${pessoa.idade}anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}