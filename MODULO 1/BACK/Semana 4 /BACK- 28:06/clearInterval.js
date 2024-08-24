let contagem = 10;

function imprimirContagem()
{
    if(contagem ===0){
        console.log("EXPLODIU");
        clearInterval(intervalId);
    }else{
        console.log(`A bomba explodira em ${contagem} segundo${contagem === 1 ? "" :"s"}`);
        contagem--

    }
    
}

imprimirContagem();//chamando a funcao,pois so tinha declarado
const intervalId = setInterval(imprimirContagem, 1000);



