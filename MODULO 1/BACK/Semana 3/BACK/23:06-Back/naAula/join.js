//obs .reverse - tambem modifica o array original
function imprimirDeTrasPraFrente(nome){
    const vetorDeLetras = nome.split("");
    vetorDeLetras.reverse();

    // let resultadoFinal = "";
    // for(let letra of vetorDeLetras){
    //     resultadoFinal += letra;
    // }
    // console.log(resultadoFinal);
    console.log(vetorDeLetras.join(""));


}

imprimirDeTrasPraFrente("Stela");
imprimirDeTrasPraFrente("Joao");
imprimirDeTrasPraFrente("Baggins");








