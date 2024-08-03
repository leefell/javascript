class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const idade = 19;
const sobrenome = "Augusto";

// module.exports = {
//   Pessoa,
//   sobrenome,
//   idade,
// };

exports.Pessoa = Pessoa;
module.exports.idade = idade;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = "Outra coisa";
