// Define um array de nomes
const nomes = ["Alexandre", "Rodolfo", "Pedro", "Rafael", "Gabriel", "Marcelo"];

// Cria um novo array que exclui os últimos três elementos do array original
const aleatorio = nomes.slice(0, -3);
console.log(aleatorio); // Imprime ["Alexandre", "Rodolfo", "Pedro"]

// Define uma string com o nome completo
const nomeCompleto = "Alexandre Augusto dos Santos";

// Divide a string em um array de palavras
const nomesSeparados = nomeCompleto.split(" ");
console.log(nomesSeparados); // Imprime ["Alexandre", "Augusto", "dos", "Santos"]

// Junta um array de palavras em uma única string com espaços entre as palavras
const nome = ["Alexandre", "Augusto", "dos", "Santos"];
const nomeString = nome.join(" ");
console.log(nomeString); // Imprime "Alexandre Augusto dos Santos"
