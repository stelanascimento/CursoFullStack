//ordem crescente de idade
//pessoas da mesma idade em ordem alfabetica
const pessoas = [
    {
        nome: "Jr",
        idade: 30
    },
    {
        nome: "adriana",
        idade: 18
    },
    {
        nome:"Andre",
        idade:30
    },
    {
        nome:"Carvalho",
        idade:16
    },
    {
        nome:"Claudio",
        idade: 30
    }
];

// primeiro ordem de idade(ordem crescente)
//- A vem primeiro
// + B vem primeiro

const ordenando = pessoas.sort((a,b) =>{
    if(a.idade < b.idade){
        return -1;
    }else if(b.idade > a.idade){
        return 1;
    }else{
        return a.nome.localeCompare(b.nome);
    }



});
console.log(ordenando);