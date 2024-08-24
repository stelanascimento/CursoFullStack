function calculaSoma(lista){
    let soma = 0;
    for(const elemento of lista){
        soma += elemento;
    }
    return soma;
}


module.exports = { calculaSoma, outroValor: "oi" }; // vai me dizer o que eu quero exportar desse arquivo para outros arquivos.

