function imprimirdata(dia,mes,ano){
    const diaString = `${dia}`.padStart(2,"0");
    const mesString = `${mes}`.padStart(2,"0");
   console.log(`${diaString}/${mesString}/${ano}`); 
}


imprimirdata(1,2,2021);
imprimirdata(14,2,2021);
imprimirdata(1,12,2021);
imprimirdata(18,2,2021);