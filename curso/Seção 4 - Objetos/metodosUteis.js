/*
Objetos em JavaScript:
- Object.values: Retorna os valores das propriedades de um objeto.
- Object.entries: Retorna um array de arrays com [chave, valor] das propriedades de um objeto.
- Object.assign: Copia todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino.
- Object.getOwnPropertyDescriptor: Retorna o descritor de propriedade para uma propriedade específica de um objeto.
- Spread operator (...): Copia as propriedades de um objeto para outro.
- Object.keys: Retorna um array com as chaves (propriedades) de um objeto.
- Object.freeze: Congela um objeto, impedindo alterações em suas propriedades e valores.
- Object.defineProperties: Define várias propriedades novas ou modifica propriedades existentes em um objeto.
- Object.defineProperty: Define ou modifica uma propriedade em um objeto.
*/

// -- Copiar objeto

// Definição de um objeto inicial
const produto = {
  nome: "Caneca",
  preco: 45.0,
};
console.log("Produto original:", produto);

// Atribuição direta faz 'outraCoisa' apontar para o mesmo local de memória que 'produto'
// Alterar 'outraCoisa' também altera 'produto'
let outraCoisa = produto;
outraCoisa.preco = 50.0; // Altera o preço de 'produto'
console.log("Após alteração direta:", produto, outraCoisa);

// Copiando o objeto 'produto' para 'outraCoisa' usando o spread operator
// Adicionando uma nova propriedade 'material'
outraCoisa = { ...produto, material: "porcelana" };
outraCoisa.preco = 100; // Aqui não altera o preço de 'produto'
console.log("Após cópia com spread operator:", produto, outraCoisa);

// Copiando o objeto 'produto' para 'caneca' usando Object.assign
const caneca = Object.assign({}, produto);
caneca.preco = 30; // Aqui também não altera o preço de 'produto'
console.log("Após cópia com Object.assign:", produto, caneca);

const caneca1 = Object.assign({}, produto);
console.log(Object.keys(caneca1));

// Object.getOwnPropertyDescriptor => Retorna como as propriedades dos produtos estão configuradas
const pessoa = { nome: "Fulano", idade: 19, possuiCNH: false };
Object.defineProperty(pessoa, "nome", {
  writable: false,
  enumerable: true,
  configurable: false,
});
// console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"));

// Object.entries = retorna um array de arrays[chave, valor] || é possível iterar sobre
// console.log(Object.entries(pessoa));
for (let entry of Object.entries(pessoa)) {
  console.log(entry);
}

// Desestruturando
for (let [chave, valor] of Object.entries(pessoa)) {
  console.log(chave, valor);
}

// Ou
for (let valor of Object.entries(pessoa)) {
  // Como o array dentro do array tem dois índices, é possível iterar assim também
  console.log(valor[0], valor[1]);
}
