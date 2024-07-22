class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já está ligado!");
      return;
    }

    this.ligado = true;
    console.log(this.nome + "ligado!");
  }

  desligado() {
    if (!this.ligado) {
      console.log(this.nome + " já está desligado!");
      return;
    }

    this.ligado = false;
    console.log(this.nome + "desligado!");
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // chama o construtor da super-classe

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, serie) {
    super(nome);
    this.serie = serie;
  }

  ligar() {
    console.log("Sobrescrevendo o método ligar.");
  }
}

const celular = new Smartphone("Iphone", "Preto", "11");
const tablet = new Tablet("Samsung", "Galaxy");
celular.ligar();
tablet.ligar();
