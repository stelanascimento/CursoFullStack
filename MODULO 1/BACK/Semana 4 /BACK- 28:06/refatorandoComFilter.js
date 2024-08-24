const array = [1,2,3,4,5,6,7,8,9];


//fiquem apenas os maiores que 5

 const arrayFiltrado = array.filter(x => x > 5 ).filter(x => x % 2 === 0);
    //return x > 5; // qunado eh funcao de 1 so linha podemos omitir o return e as chaves
 

 console.log(arrayFiltrado);
 console.log(array);