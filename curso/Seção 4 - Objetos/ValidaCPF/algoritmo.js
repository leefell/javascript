// Função construtora ValidaCPF
function ValidaCPF(cpfEnviado) {
  // Define a propriedade "cpfLimpo" usando "Object.defineProperty"
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true, // Permite que a propriedade seja enumerável em um loop
    get: function () {
      // Retorna o CPF enviado, removendo todos os caracteres que não são dígitos
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

// Método que valida o CPF e retorna verdadeiro ou falso
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.ehSequencial()) return false;

  // Pega os primeiros 9 dígitos do CPF
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  // Gera o primeiro dígito verificador
  const primeiroDigito = this.geraDigito(cpfParcial);
  // Gera o segundo dígito verificador
  const segundoDigito = this.geraDigito(cpfParcial + primeiroDigito);

  // Concatena os 9 dígitos com os dois dígitos verificadores gerados
  const novoCpf = cpfParcial + primeiroDigito + segundoDigito;

  // Compara o CPF gerado com o CPF original
  console.log(novoCpf);
  return novoCpf === this.cpfLimpo;
};

// Método que gera os dígitos verificadores
ValidaCPF.prototype.geraDigito = function (cpfParcial) {
  // Converte "cpfParcial" em um array de caracteres
  const cpfArray = Array.from(cpfParcial);

  let contadorRegressivo = cpfArray.length + 1;
  // Reduz o array para calcular o total das multiplicações dos dígitos
  const total = cpfArray.reduce((acumulador, valor) => {
    acumulador += contadorRegressivo * Number(valor);
    contadorRegressivo--;
    return acumulador;
  }, 0);

  // Calcula o dígito usando módulo 11
  const digito = 11 - (total % 11);
  // Retorna 0 se o dígito for maior que 9, caso contrário, retorna o dígito calculado
  return digito > 9 ? "0" : String(digito);
};

// Método que verifica se o CPF é uma sequência de números iguais
ValidaCPF.prototype.ehSequencial = function () {
  // Cria uma sequência de caracteres iguais ao primeiro dígito do CPF
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  // Compara a sequência criada com o CPF
  return sequencia === this.cpfLimpo;
};

// Cria uma instância de ValidaCPF com o CPF fornecido
const cpf = new ValidaCPF("705.484.450-52");

// Verifica se o CPF é válido e imprime o resultado
if (cpf.valida()) {
  console.log("Cpf Válido!");
} else {
  console.log("Cpf Inválido!");
}
