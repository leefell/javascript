// Splice é útil para mexer no meio do array
const nomes = ["Alexandre", "Rodolfo", "Pedro", "Rafael", "Gabriel", "Marcelo"];

// nomes.splice(índice, quantidadeDeElementosDelete, elem1, elem2, elem3);
// Simulando a função pop: nomes.splice(-1,1) // remove o último elemento
// Simulando a função shift: nomes.splice(0,1) // remove o primeiro elemento
// Simulando a função push: nomes.splice(nomes.length, 0, 'Garrafa') // adiciona no final
// Simulando a função unshift: nomes.splice(0, 0, 'Garrafa', 'Aaaa') // adiciona no início

// Remove o último elemento e armazena em 'removidos'
// const removidos = nomes.splice(-1, 1);
// Remove todos os elementos a partir do final e armazena em 'removidos'
// const removidos = nomes.splice(-1, Number.MAX_VALUE);

// Remove 'Gabriel' e 'Marcelo', adicionando 'Tangerina' e 'Tchelo' no lugar
const removidos = nomes.splice(4, 2, "Tangerina", "Tchelo");
console.log(nomes); // Imprime ["Alexandre", "Rodolfo", "Pedro", "Rafael", "Tangerina", "Tchelo"]
console.log(removidos); // Imprime ["Gabriel", "Marcelo"]
