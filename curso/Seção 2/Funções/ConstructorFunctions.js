// Convenção: Funções construtoras iniciam com letra maiuscula
function Pessoa(nome, sobrenome) {
  const ID = 123456;
  const metodoInterno = function () {
    if (ID === 123456) {
      // faça algo
    }
  };

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.fala = () => {
    console.log(this.nome + " está falando!");
  };
}

const p1 = new Pessoa("Alexandre", "Augusto");
const p2 = new Pessoa("Gabriel", "Tangerina");
p1.fala();
p2.fala();
