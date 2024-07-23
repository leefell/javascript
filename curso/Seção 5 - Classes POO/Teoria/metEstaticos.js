class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  // Método de Instância
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático -> Basicamente uma função que está dentro de uma classe
  // e não precisa de instância para ser chamada.
  static limparControles() {
    console.log("Todos os controles foram limpos.");
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

ControleRemoto.limparControles();
