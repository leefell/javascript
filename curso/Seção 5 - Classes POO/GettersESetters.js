// Utilizando Symbol para criar uma propriedade privada
const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  // Getter para a velocidade
  get velocidade() {
    return this[_velocidade];
  }

  // Setter para a velocidade com validação
  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  // Método para acelerar o carro
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  // Método para freiar o carro
  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro = new Carro("Fusca");

// Testando o método acelerar
for (let i = 0; i <= 101; i++) {
  carro.acelerar();
}

console.log(carro);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Getter para o nome completo
  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  // Setter para o nome completo
  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const p1 = new Pessoa("Amonet", "Silva");
p1.nomeCompleto = "Amonet Silva Fernandes BlaBla";
console.log(p1.nomeCompleto);
