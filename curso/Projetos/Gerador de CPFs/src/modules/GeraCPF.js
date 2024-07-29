import ValidaCPF from "./validaCPF";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatar(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.rand();
    const primeiroDigito = ValidaCPF.geraDigito(cpfSemDigitos);
    const segundoDigito = ValidaCPF.geraDigito(cpfSemDigitos + primeiroDigito);
    const novoCPF = cpfSemDigitos + primeiroDigito + segundoDigito;

    return this.formatar(novoCPF);
  }
}
