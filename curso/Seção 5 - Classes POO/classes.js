// Classe é a mesma coisa da função construtora
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Os métodos dentro de uma classe já são automaticamente linkados no proto
  // Então falar está em uma instância de memória e todos os objetos instanciados
  // terão referência para ele
  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

// Comparação com a função construtora
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa("Alexandre", "Augusto");
p1.falar();
const p2 = new Pessoa2("Ana", "Laura");
p2.falar();
