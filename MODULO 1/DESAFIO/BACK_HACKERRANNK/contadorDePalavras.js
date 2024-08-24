let texto = " Cuidado, pois usuarios     Stela    Stela  s";

//OBS:. EH possivel apagar elementos com replace
//colocando pra substituir pelo ""


texto = texto.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
texto = texto.replace(/[ ]{2,}/gi," ");//2 or more space to 1
texto = texto.replace(/\n /,"\n"); // exclude newline with a start spacing
const fulana= texto.split(' ').filter(function(texto){return texto!="";}).length;
 //return texto.split(' ').filter(texto).length; - this can also be used
console.log(fulana);





// console.log(count,texto);

// const myWords = texto.trim().split(new RegExp("\\s+"))
// console.log(myWords.length);











