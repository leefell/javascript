// Revisão rápida de filter

const pessoas = [
  { nome: "Alexandre", idade: 19 },
  { nome: "Maria", idade: 15 },
  { nome: "Rafael", idade: 22 },
  { nome: "Gabriel", idade: 30 },
  { nome: "Fernanda", idade: 27 },
  { nome: "Lucas", idade: 11 },
  { nome: "Sofia", idade: 41 },
  { nome: "Thiago", idade: 18 },
  { nome: "Juliana", idade: 26 },
  { nome: "Roberto Juliano", idade: 35 },
  { nome: "Amanda", idade: 23 },
];

// Listar pessoas com a idade menor que 20 anos
const menorQueVinte = pessoas.filter((obj) => obj.idade < 20);
console.log(menorQueVinte);

// Listar pessoas que comecem com a letra A
const comecaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().startsWith("a")
);
console.log(comecaComA);

// Filtrar pessoas com o nome maior que 6 letras
const nomeMaior = pessoas.filter((obj) => obj.nome.length > 6);
console.log(nomeMaior);

// Filtrar idadesPares
const idadePar = pessoas.filter((obj) => obj.idade % 2 === 0);
console.log(idadePar);

// Filtrar pessoas que o nome conteha a letra E
const nomeComE = pessoas.filter((obj) => obj.nome.toLowerCase().includes("e"));
console.log(nomeComE);

// Filtrar pessoas com o nome composto
const nomeComposto = pessoas.filter((obj) => obj.nome.split(" ").length > 1);
console.log(nomeComposto);
