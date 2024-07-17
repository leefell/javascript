// Definição de um objeto literal
const pessoa = {
  // Chave - Valor
  nome: "Alexandre",
  sobrenome: "Augusto",
};

const chave = "nome";
console.log(pessoa[chave]); // Acessando a chave dinamicamente
console.log(pessoa.sobrenome); // Notação de ponto

// Utilizando um Construtor para criar um objeto
const pessoa1 = new Object();
pessoa1.nome = "Marcelo";
pessoa1.idade = 19;

// Método para retornar uma string com o nome da pessoa falando
pessoa1.falarNome = function () {
  return `${this.nome} está falando o seu nome`;
};

// Método para calcular e retornar o ano de nascimento
pessoa1.getDataNascimento = function () {
  const data = new Date();
  return data.getFullYear() - this.idade;
};

// Exemplo de como chamar os métodos do objeto
console.log(pessoa1.falarNome()); // Marcelo está falando o seu nome
console.log(pessoa1.getDataNascimento()); // Calcula o ano de nascimento com base na idade

// Iterar sobre as chaves do objeto e imprimir seus valores
for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

// Factory Functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    // Método get para retornar o nome completo
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Alexandre", "Augusto");
console.log(p1.nomeCompleto); // Alexandre Augusto

// Constructor Functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Trava o objeto no estado atual dele
  Object.freeze(this);
}

const p2 = new Pessoa("Gabriel", "Tangerina");
p2.nome = "Outra coisa"; // Não altera por causa do Object.freeze
const p3 = new Pessoa("Ana", "Lima");
p3.nome = "Tentando alterar o nome msm com Object.freeze"; // Não altera por causa do Object.freeze
console.log(p2.nome, p3.nome); // Gabriel Tangerina, Ana Lima

p2.fala = function () {
  console.log("oii");
};

console.log(p2.fala); // undefined
