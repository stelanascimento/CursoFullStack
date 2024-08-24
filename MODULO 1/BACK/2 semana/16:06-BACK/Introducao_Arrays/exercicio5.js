//Faca um programa que busque pelo nome Joao numa lista de nomes  e imprima na tela o indice em que ele se encontra 
const lista = ["Stela","Amanda","Jessica","Joana","Pedro","Joao","Antonio"];

let encontrado = false;
for(let i =0; i < lista.length;i++){
    const item = lista[i];

    if(item === "Joao"){
        console.log(`Joao esta no indice ${i}`);
        encontrado = true ;
        break;
    }

}

if(!encontrado){
    console.log("nao encontrado");
}