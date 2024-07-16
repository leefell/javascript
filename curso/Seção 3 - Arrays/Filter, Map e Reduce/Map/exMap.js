// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // Crie um novo array que contenha cada número do array numeros multiplicado por 2.
// const numerosDobrados = numeros.map((valor) => valor * 2);
// console.log(numerosDobrados);

// // Crie um novo array que contenha a raiz quadrada de cada número do array numeros.
// const raiz = numeros.map((valor) => Math.sqrt(valor).toFixed(1));
// console.log(raiz);

// // Crie um novo array que contenha uma string para cada número, indicando se ele é "par" ou "ímpar".
// const parOuImpar = numeros.map((numero) =>
//   numero % 2 === 0 ? numero + " par" : numero + " impar"
// );
// console.log(parOuImpar);

// // Crie um novo array que contenha cada número do array numeros subtraído por 1.
// const numerosSubtraidos = numeros.map((valor) => valor - 1);
// console.log(numerosSubtraidos);

// // Crie um novo array que contenha os números do array numeros convertidos para strings.
// const numerosString = numeros.map((valor) => valor.toString());
// console.log(numerosString);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Crie um novo array que contenha apenas os nomes das pessoas.
const apenasNomes = pessoas.map((obj) => obj.nome);
console.log(apenasNomes);

// Crie um novo array que contenha apenas as idades das pessoas.
const apenasIdades = pessoas.map((obj) => obj.idade);
console.log(apenasIdades);

// Crie um novo array que contenha um objeto para cada pessoa com um novo campo
// "anoDeNascimento", calculado a partir da idade e do ano atual.
const anoAtual = new Date().getFullYear();
const anoDoNascimento = pessoas.map((pessoa) => ({
  ...pessoa,
  anoDeNascimento: anoAtual - pessoa.idade,
}));
console.log(anoDoNascimento);

// Crie um novo array que contenha strings no formato "Nome tem Idade anos" para cada pessoa.
const stringFormatada = pessoas.map(
  (obj) => `${obj.nome} tem ${obj.idade} anos`
);
console.log(stringFormatada);

// Crie um novo array que contenha um objeto para cada pessoa com a idade incrementada em 5 anos.
const idadesEmCincoAnos = pessoas.map((obj) => obj.idade + 5);
console.log(idadesEmCincoAnos);
