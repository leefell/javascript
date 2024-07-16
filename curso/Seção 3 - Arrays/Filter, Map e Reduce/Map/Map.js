// Map ->  cria um novo array com os resultados da aplicação
// de uma função a cada elemento do array original. (sempre o msm tamanho do array base)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // Dobrar os valores dos números
// const numerosDobrados = numeros.map((valor) => valor * 2);
// console.log(numerosDobrados);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomeString = pessoas.map((obj) => obj.nome);
console.log(nomeString);

// Remova apenas a chave nome do objeto
const removeChaveNome = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(removeChaveNome);

// Adicione uma chave Id em cada objeto
const comIds = pessoas.map(function (obj, indice) {
  // Caso não seja o intuito essa função vai dar um problema, ela vai alterar o obj original.
  //   obj.id = indice + 1;
  //   return obj;

  // Solução:

  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(comIds);
console.log(pessoas);
