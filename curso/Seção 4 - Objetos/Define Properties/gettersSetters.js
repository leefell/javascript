// Função construtora Produto com getters e setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  // Variável privada para armazenar o valor do estoque
  let estoquePrivado = estoque;

  // Definindo a propriedade 'estoque' com get e set
  Object.defineProperty(this, "estoque", {
    enumerable: true, // A propriedade será incluída em iterações
    configurable: true, // A propriedade pode ser reconfigurada ou deletada
    get: function () {
      // Getter para obter o valor de estoquePrivado
      return estoquePrivado;
    },
    set: function (valor) {
      // Setter para validar e definir o valor de estoquePrivado
      if (typeof valor !== "number") {
        throw new TypeError("Valor deve ser numérico");
      }
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1); // Exibindo o objeto p1
p1.estoque = 50000000; // Definindo um novo valor para estoque
console.log(p1, p1.estoque); // Exibindo o objeto p1 e o valor de estoque

// Função fábrica criaProduto com getters e setters
function criaProduto(nome) {
  return {
    // Getter para obter o valor de 'nome'
    get nome() {
      return nome;
    },
    // Setter para validar e definir o valor de 'nome'
    set nome(valor) {
      valor = valor.replace("coisa", ""); // Removendo a palavra 'coisa' do valor
      nome = valor;
    },
  };
}

const p2 = criaProduto("Celular");
p2.nome = "Qualquer coisa"; // Definindo um novo valor para 'nome'
console.log(p2.nome); // Exibindo o valor de 'nome'
