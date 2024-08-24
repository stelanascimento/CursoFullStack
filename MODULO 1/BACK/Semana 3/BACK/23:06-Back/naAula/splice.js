const array = ["a","b","c","d","e"];

array.splice(1,3,"f");
console.log(array);
console.log("-----------------");
array.splice(1,1,"c");
console.log(array);

console.log("-----------------");
array.splice(array.length -1,1,"F");
console.log(array);

console.log("---------PUSH--------");
array.splice(array.length ,0,"P");
console.log(array);

console.log("---------UNSHIFT--------");
array.splice(0,0,"w");
console.log(array);

console.log("--------POP---------");
array.splice(array.length - 1,1);
console.log(array);

console.log("---------SHIFT--------");
array.splice(0,1);
console.log(array);



