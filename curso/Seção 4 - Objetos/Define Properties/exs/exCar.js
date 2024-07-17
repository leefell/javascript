function Carro(modelo, ano, preco, disponibilidade) {
  Object.defineProperties(this, {
    modelo: {
      enumerable: true,
      value: modelo,
      writable: false,
      configurable: false,
    },
    ano: {
      enumerable: true,
      value: ano,
      writable: false,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: false,
    },
    disponibilidade: {
      enumerable: true,
      value: disponibilidade,
      writable: true,
      configurable: false,
    },
  });
}

const carro = new Carro("Fusca", 1990, 10000, true);
console.log(carro);

carro.modelo = "Porsche"; // Não deve alterar
carro.ano = "2024";
carro.preco = 20000;
carro.disponibilidade = false;
console.log(carro);
