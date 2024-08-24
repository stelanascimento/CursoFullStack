const array = [1,2,3,4,5,6,7,8,9];


//fiquem apenas os maiores que 5

 const arrayFiltrado = array.filter((x) => {
     //const arrayFiltrado = array.filter((x,index,array) => {
    if(x.length > 5){
        return true;
    }else{
        return false;
    }
 });

 console.log(arrayFiltrado);
 console.log(array);