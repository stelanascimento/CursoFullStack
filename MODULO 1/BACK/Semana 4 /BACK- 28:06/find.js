const array = ["Ola","Stela","outra coisa","Praia do Frances"];

const encontrado = array.find((x) => x.length > 10 );

if(encontrado){
    console.log(`A palavra com mais de 10 caracteres eh:  ${encontrado}`);
}else{
    console.log("Nengum item tem mais de 10 caracteres");
}

