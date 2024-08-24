const valorDaCompra = 10000;//ta em centavos
const numeroDeParcelas = 3;



if (numeroDeParcelas ===1){
    let valorAPagarEmReais = (valorDaCompra * 0.9)/100;
    console.log(`Como o pagamento eh a vista tem desconto de 10% e deve pagar apenas ${valorAPagarEmReais} reais.`);

}else{
    let valorDaParcelaEmReais = ((valorDaCompra/numeroDeParcelas)/100).toFixed(2);
    console.log(`Como o pagamento eh a prazo, vc pagara em ${numeroDeParcelas}x de ${valorDaParcelaEmReais},totalizando ${valorDaCompra/100}reais`);


}