const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Calcular a soma de todos os números.
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

// Encontrar o maior número.
const maiorNumero = numeros.reduce(function (acumulador, valor) {
  return Math.max(acumulador, valor);
}, 0);
console.log(maiorNumero);

// Calcular a média dos números.
const media =
  numeros.reduce(function (acumulador, valor) {
    return acumulador + valor;
  }, 0) / numeros.length;
console.log(media.toFixed());

// Concatenar todos os números como uma string.
const concatenaNumeros = numeros.reduce(function (acumulador, valor) {
  return acumulador + valor.toString();
}, "");
console.log(concatenaNumeros);

// Contar quantos números são pares.
const contaPar = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) {
    acumulador++;
  }
  return acumulador;
}, 0);
console.log(contaPar);
console.log("--------------------------------------------");

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 99 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Pedro", idade: 11 },
];

// Encontrar a pessoa mais nova.
const pessoaMaisNova = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade < valor.idade) return acumulador;
  return valor;
}, 0);
console.log(pessoaMaisNova);

// Calcular a média de idade das pessoas.
const mediaIdades =
  pessoas.reduce(function (acumulador, valor) {
    return acumulador + valor.idade;
  }, 0) / pessoas.length;
console.log(mediaIdades);

// Agrupar as pessoas por faixa etária.
const pessoasPorFaixaEtaria = pessoas.reduce(function (acumulador, valor) {
  // Calcula a faixa etária arredondando para baixo o valor da idade dividido por 10, e depois multiplica por 10 para obter o múltiplo de 10 mais próximo.
  const faixa = Math.floor(valor.idade / 10) * 10;

  // Verifica se a faixa etária já existe no acumulador. Se não existir, inicializa como um array vazio.
  if (!acumulador[faixa]) acumulador[faixa] = [];

  // Adiciona a pessoa atual ao array correspondente à sua faixa etária.
  acumulador[faixa].push(valor);

  // Retorna o acumulador modificado para a próxima iteração ou como resultado final.
  return acumulador;
}, {});
console.log(pessoasPorFaixaEtaria);

// Contar quantas pessoas têm idade múltipla de 10.
const idadeMultiplaDeDez = pessoas.reduce(function (acumulador, valor) {
  if (valor.idade % 10 === 0) {
    acumulador++;
  }

  return acumulador;
}, 0);

// Transformar o array em um objeto onde as chaves são os nomes das pessoas e os valores são suas idades.
const pessoasEmObjeto = pessoas.reduce(function (acumulador, valor) {
  acumulador[valor.nome] = valor.idade;
  return acumulador;
}, {});
console.log(pessoasEmObjeto);
