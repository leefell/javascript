// Definindo objetos que possuem métodos
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// Compondo um objeto com outros objetos | Mixing
// Utiliza spread operator para combinar os métodos dos objetos falar, comer e beber
const pessoaPrototype = { ...falar, ...comer, ...beber };
// Alternativa: Utiliza Object.assign para combinar os métodos dos objetos falar, comer e beber
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  // Cria um novo objeto com pessoaPrototype como protótipo e define as propriedades nome e sobrenome
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Alexandre", "Augusto");
p1.falar();
