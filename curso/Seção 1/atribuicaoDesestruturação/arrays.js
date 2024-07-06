// Indice        0,   1,  2,  3,  4,  5,  6,  7,  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// ... rest | ... spread
//          10              20          50..90
const [primeiroNumero, segundoNumero, , ,...resto] = numeros; // Atribuição via desestruturação.
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// Exemplo com array em array
//                  0       1       2
//               0,1,2    0,1,2    0,1,2
const arrayN = [[1,2,3], [4,5,6], [7,8,9]]
console.log(arrayN[2][0]); // 7

// Desestruturando para pegar o número 6
const [,[,,seis]] = arrayN; // Mas isso é complexo
console.log(seis); 

const[L1, L2, L3] = arrayN;
console.log(L2[2]);