function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    origem: "brasileiro",

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto = "nada") {
      return `${this.nome} está falando sobre ${assunto}.`;
      // This -> sinaliza para um atributo de QUEM chamou.
    },
    imc: function () {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
    // Getter -> apenas obter o valor
    get nacionalidade() {
      // Com o get antes da função, ela se passa por atributo, ai nao precisa () para chamar.
      return this.origem;
    },
  };
}

const p1 = criaPessoa("Alexandre", "Augusto", 1.8, 90);
p1.nomeCompleto = "Alexandre Augusto Dos";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
