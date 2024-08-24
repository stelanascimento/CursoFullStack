const valorDaCompra = 10000;//ta em centavos
const numeroDeParcelas = 12;



if (numeroDeParcelas ===1){
    let valorAPagarEmReais = (valorDaCompra * 0.9)/100;
    console.log(`Como o pagamento eh a vista tem desconto de 10% e deve pagar apenas ${valorAPagarEmReais} reais.`);

}

else if(numeroDeParcelas >= 2 && numeroDeParcelas < 7) {
    let valorDaParcelaEmReais = ((valorDaCompra/numeroDeParcelas)/100).toFixed(2);
    console.log(`Como o pagamento eh a prazo, vc pagara em ${numeroDeParcelas}x de ${valorDaParcelaEmReais},totalizando ${valorDaCompra/100}reais`);
}

else if(numeroDeParcelas <=12){ 
    const valorComJuros = valorDaCompra * Math.pow((1+0.01),numeroDeParcelas);
    let valorDaParcelaEmReais = ((valorComJuros/numeroDeParcelas)/100).toFixed(2);
    console.log(`Como o pagamento eh a prazo, vc pagara em ${numeroDeParcelas}x de ${valorDaParcelaEmReais}reais com juros,totalizando ${(valorComJuros/100).toFixed(2)}reais`);
    
} 

else{
    console.log(`Nao eh possivel dividir nessa quantidade de parcelas`);
}