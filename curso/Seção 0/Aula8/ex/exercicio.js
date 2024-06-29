// Trocando os valores das variaveis

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
console.log(varA, varB, varC);

// const constanteA = varA
// varA = varB // B
// varB = varC // C
// varC = constanteA // A
// console.log(varA, varB, varC);

// Outra solução:

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);