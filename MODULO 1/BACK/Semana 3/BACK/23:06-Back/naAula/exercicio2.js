const numero = "1,350,000";
let newnumber = numero;
let  lastresult = "";
// const newnumber = numero.replace(",",".").replace(",",".");
// console.log(newnumber);
console.log(numero);
//
while(newnumber !== lastresult){
    
    lastresult = newnumber;
    newnumber = newnumber.replace(",",".");
    

}
console.log(newnumber);