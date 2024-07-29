export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  ehSequencial() {
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const primeiroDigito = ValidaCPF.geraDigito(cpfSemDigitos);
    const segundoDigito = ValidaCPF.geraDigito(cpfSemDigitos + primeiroDigito);
    this.novoCPF = cpfSemDigitos + primeiroDigito + segundoDigito;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let contadorReverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += contadorReverso * Number(stringNumerica);
      contadorReverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo === undefined || typeof this.cpfLimpo !== "string")
      return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.ehSequencial()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}
