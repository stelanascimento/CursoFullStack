//A final foi vencida pelo Brasil com dois Gols de Ronaldo Fenomeno:
//1-O primeiro aos 22 minutos do segundo tempo.
//2-O segundo aos 34 minutos do segundo tempo.
//Sabendo que um tempo tem 45 minutos e que sao 15 minutos de intervalo,
//crie dois objetos com datas em que ocorreram cada um dos gols.Use Timestamps.

const finalDaCopa = new Date(2002,5,30,8);
const inicioTimestamp = +finalDaCopa;

const primeiroGolTimestamp = inicioTimestamp + ((45+15+22)*(1000*60));
const primeiroGolDate = new Date(primeiroGolTimestamp);

console.log(primeiroGolDate);

//Segundo Gol
console.log(new Date(+finalDaCopa + (45+15+38)*60*1000));

