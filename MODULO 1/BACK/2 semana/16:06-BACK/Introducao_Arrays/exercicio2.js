const palavra = "Abracadabra";
let contador = 0;
for(let letra of palavra){
    if(letra === "a"){
        contador++;  
    } 
}


if(contador === 0){
    console.log(`Nao ha nenhuma letra "a" nessa palavra !`)
}
else if(contador === 1){
    console.log(`Tem 1 letra "a " nessa palavra`);
}else{
console.log(`Tem ${contador} letras "a" nessa palavra`);
}