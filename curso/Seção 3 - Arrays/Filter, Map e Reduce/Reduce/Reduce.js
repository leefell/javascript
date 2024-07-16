// Reduce -> Reduzir o array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números
const somaNumeros = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0); // Valor inicial do acumulador
// console.log(somaNumeros);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 99 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
}, 0);
console.log(pessoaMaisVelha);
