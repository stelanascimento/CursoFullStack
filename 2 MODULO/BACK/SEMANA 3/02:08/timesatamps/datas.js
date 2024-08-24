const finalDaCopa = new Date(2002,5,30,8);
 // colocando o + vc acessa o timestamp
const finalMaisUmaHoraDate = +finalDaCopa + 1000*60*60; //somando 1 hora(em milisegundos)
const maisUmaHoraDate = new Date(finalMaisUmaHoraDate);

console.log(maisUmaHoraDate);

// tbm pode usar o getTime();
//const timestamp = finalDaCopa.getTime();

