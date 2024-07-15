// Escreva uma função que recebe 2 números e retorna o maior
function retornaMaior(n1, n2){
    return n1 > n2 ? n1 : n2;
}

// Como arrow function
const max = (x,y) => x > y ? x : y; 

console.log("Maior: " + retornaMaior(1,2));
console.log("Maior: " + retornaMaior(9,6));
console.log("Maior: " + max(23,3));
console.log("Maior: " + max(866,233));