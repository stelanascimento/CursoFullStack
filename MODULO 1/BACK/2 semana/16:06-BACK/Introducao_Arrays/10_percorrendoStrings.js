const palavra = "Alemanhha";

let encontrado = false;
for(let letra of palavra){
    if(letra === "h"){
        encontrado = true;
        console.log("Tem a letra h");
        break;
    }

}

if(!encontrado){
    console.log("Nao tem a letra h");
}