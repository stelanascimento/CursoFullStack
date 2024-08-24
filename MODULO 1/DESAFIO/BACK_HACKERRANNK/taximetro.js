//     TEMPO
// 50 centavos/MIN de viagem 
//    DISTANCIA
// + 70 centavos/km rodado


//   DISTANCIA
//if viagem = 10km => 50 centavos/km ,quando passa de 10 km
//    TEMPO
//if tempo viagem > 20min => 30 CENTAVOS/MIN

//50 * 20min = 1000 centavos
// 70 *10 = 700 centavos
//total tudo acima = 1910 centavos

//ARRENDONDAR PRA BAIXO com math.trunc()

const min = 25;
const km = 11.5;

const overMin= min - 20;
const overKm = km - 10;

let preco = 0.0;

if(min > 20 && km >10){   //OVERMIN e OVERKM
    preco = ((1700)+(overMin * 30)+(overKm * 50));
    console.log(Math.trunc(preco));
}
else if(min > 20 && km <=10){  //OVERMIN
    preco = ((1000)+(overMin*30)+(70 * km));
    console.log(Math.trunc(preco));
}else if(min <= 20 && km > 10){  //OVERKM
    preco = ((700)+(overKm *50)+(min * 50));
    console.log(Math.trunc(preco));
}else{   //NENHUM OVER
    preco = ((70 * km)+(50 * min));
    console.log(Math.trunc(preco));
}
