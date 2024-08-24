let joao ={
    nome: "Joao",
    idade: 44,
    profissao: "Estudante",
    altura: 1.92,
    apresentar : function(){
        const faixaEtaria = this.obterFaixaEtaria(this.idade);
        console.log(`Ola meu nome eh ${this.nome},sou um ${faixaEtaria} de ${this.idade}anos,${this.altura}m de altura e sou ${this.profissao}`);
    },
    obterFaixaEtaria: function(){
        if(this.idade < 25){
            return "jovem";
        }else if(this.idadeidade < 65){
            return "adulto";
        }else{
            return "idoso";
        }

    }
};

joao.apresentar();
console.log(joao.obterFaixaEtaria());





