// Definindo dois arrays iniciais
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Concatenando os arrays usando o método concat
const array3 = array1.concat(array2);
console.log(array3); // Imprime [1, 2, 3, 4, 5, 6]

// Outra maneira de concatenar arrays usando o spread operator (...)
const array4 = [7, 8, 9];
const array5 = [10, 11, 12];
const array6 = [...array4, ...array5, 13, 14, 15]; // Inclui elementos adicionais ao concatenar
console.log(array6); // Imprime [7, 8, 9, 10, 11, 12, 13, 14, 15]

// Função que filtra e concatena apenas os números pares de dois arrays
function filtraEConcatenaPares(a1, a2) {
  let pares = [];

  // Filtra e adiciona os elementos pares do primeiro array ao array pares
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] % 2 === 0) {
      pares.push(a1[i]);
    }
  }

  // Filtra e adiciona os elementos pares do segundo array ao array pares
  for (let i = 0; i < a2.length; i++) {
    if (a2[i] % 2 === 0) {
      pares.push(a2[i]);
    }
  }

  // Retorna o array contendo apenas os elementos pares concatenados
  return pares;
}

// Testa a função filtraEConcatenaPares com os arrays array1 e array2
console.log(filtraEConcatenaPares(array1, array2)); // Imprime [2, 4, 6]
