/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - Array, object, function - valores passados por referência
*/

// Exemplo de valores primitivos
let a = 'A';
let b = a; // cópia do valor
console.log(a, b); // A A

a = 'Valor de "a" alterado';
console.log(a, b); // Valor de "a" alterado A - o valor de B não é afetado por ser uma cópia

// Exemplo de valores por referência
let arrayA = [1, 2, 3];
let arrayB = arrayA; // passado por referência, se alterar o valor de 'b' o 'a' altera

arrayA.push(10);
arrayB.push(4);
console.log(arrayA, arrayB); // [1, 2, 3, 10, 4] [1, 2, 3, 10, 4]

arrayB.pop();
console.log(arrayA, arrayB); // [1, 2, 3, 10] [1, 2, 3, 10]

// Como copiar o VALOR mutável
let arrayC = [...arrayA]; // copia o valor de arrayA
console.log(arrayC); // [1, 2, 3, 10]

const objX = {
    nome: 'Alexandre',
    sobrenome: 'Augusto'
};

const objZ = { ...objX }; // copia o valor de objX
objZ.nome = 'Alex';
console.log(objX); // { nome: 'Alexandre', sobrenome: 'Augusto' }
console.log(objZ); // { nome: 'Alex', sobrenome: 'Augusto' }
