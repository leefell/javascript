const nome = "Alexandre";
const sobrenome = "Augusto";
export const idade = 19;
const cpf = "12132212122";

// import qualquerNome from './modulo1 - importaria a funcao default, no caso a soma
//export default function soma(x, y) {
//   return x + y;
// }

function soma(x, y) {
  return x + y;
}

export { nome, sobrenome, soma };

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
