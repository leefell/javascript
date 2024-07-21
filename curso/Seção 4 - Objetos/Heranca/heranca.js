// Produto -> aumento, desconto
// Camisa = cor | caneca = material

// Função Construtora Produto
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Métodos de Produto
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// Função Construtora Camiseta (Especialização de Produto)
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); // Chama o construtor de Produto
  this.cor = cor;
}

// Herança de Produto para Camiseta
Camiseta.prototype = Object.create(Produto.prototype); // Herda o protótipo de Produto
Camiseta.prototype.constructor = Camiseta; // Corrige o construtor apontando para Camiseta

// Sobrescrevendo o método aumento para Camiseta
Camiseta.prototype.aumento = function (percentual) {
  this.preco += this.preco * (percentual / 100);
};

// Função Construtora Caneca (Especialização de Produto)
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco); // Chama o construtor de Produto
  this.material = material;

  // Define a propriedade estoque com getter e setter
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (quantidade) {
      if (typeof quantidade !== "number") return;
      estoque = quantidade;
    },
  });
}

// Herança de Produto para Caneca
Caneca.prototype = Object.create(Produto.prototype); // Herda o protótipo de Produto
Caneca.prototype.constructor = Caneca; // Corrige o construtor apontando para Caneca

// Sobrescrevendo o método desconto para Caneca
Caneca.prototype.desconto = function (percentual) {
  this.preco -= this.preco * (percentual / 100);
};

// Constrói Celular
function Celular(nome, preco, marca, cor, estoque) {
  Produto.call(this, nome, preco); // Chama o construtor de produto
  this.cor = cor;

  // Define e especifica as propriedades marca e estoque
  Object.defineProperties(this, {
    marca: {
      enumerable: true,
      configurable: false,
      value: marca,
      writable: false,
    },
    estoque: {
      enumerable: true,
      configurable: true,
      value: estoque,
      writable: true,
    },
  });
}
Celular.prototype = Object.create(Produto.prototype); // Herda o __proto__ de produto
Celular.prototype.constructor = Celular; // Corrige o construtor para Celular
// Sobrescrevendo os métodos de desconto e de aumento
Celular.prototype.aumento = function (percentual) {
  this.preco += this.preco * (percentual / 100);
};
Celular.prototype.desconto = function (percentual) {
  this.preco -= this.preco * (percentual / 100);
};

// Criando instâncias
const celular = new Celular("Iphone 11", 4000, "Apple", "Preto", 20);
const caneca = new Caneca("Caneca do Superman", 70, "porcelana", 5);
const produtoGenerico = new Produto("Generico", 40);
const camiseta = new Camiseta("Camiseta Over-Sized", 100, "Preta");

// Exibindo as instâncias antes das alterações
console.log(camiseta);
console.log(produtoGenerico);
console.log(caneca);

// Aplicando métodos nas instâncias
camiseta.aumento(20); // Aumento percentual para Camiseta
produtoGenerico.aumento(70); // Aumento absoluto para Produto
caneca.desconto(10); // Desconto percentual para Caneca

// Exibindo as instâncias após as alterações
console.log(camiseta);
console.log(produtoGenerico);
console.log(caneca);
console.log("------------------------------");
console.log(celular);
celular.aumento(10);
console.log(celular.preco);
celular.desconto(15);
console.log(celular.preco);
