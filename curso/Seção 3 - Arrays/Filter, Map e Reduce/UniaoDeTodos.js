// Retorne a soma do dobro de todos os pares
// - Filtrar pares
// - Dobrar os valores
// - Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Encadeado
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numerosPares);

// Desencadeado
// const numerosPares = numeros.filter((valor) => valor % 2 === 0);
// console.log(numerosPares);

// const numerosParesDobrados = numerosPares.map((valor) => valor * 2);
// console.log(numerosParesDobrados);

// const numerosParesDobradosSomados = numerosParesDobrados.reduce(function(acumulador, valor){
//     return acumulador + valor;
// }, 0)
// console.log(numerosParesDobradosSomados);
