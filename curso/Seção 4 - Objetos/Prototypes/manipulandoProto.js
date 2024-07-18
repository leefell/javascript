// // Cadeia de proto
// // new Object => Object.prototype
// const objA = {
//   chaveA: "A",
//   // __proto__: Object.prototype
// };

// const objB = {
//   chaveB: "B",
//   // __proto__: objA
// };

// const objC = new Object();
// objC.chaveC = "C";

// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);

// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
p1.aumento(50);
console.log(p1);

// Como linkar o aumento do prototype de Produto num objeto literal
const p2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2);

// Criando e ja settando o prototype
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 800,
  },
});
p3.desconto(20);
console.log(p3);
