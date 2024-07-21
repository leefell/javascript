function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo <= valor) {
    console.log(
      `Você não pode sacar uma quantia maior do que tem: ${this.saldo}`
    );
    return;
  }
  this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Agência/Conta: ${this.agencia}/${
      this.conta
    } | Saldo: R$${this.saldo.toFixed(2)}`
  );
};

Conta.prototype.transferencia = function (contaAReceber, quantia) {
  if (this.saldo < quantia) {
    console.log(
      `Você não pode transferir uma quantia maior do que tem: ${this.saldo}`
    );
    return;
  }
  this.saldo -= quantia;
  contaAReceber.saldo += quantia;
  this.verSaldo();
  contaAReceber.verSaldo();
};

// Especializando a Super-Classe
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.construtor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  // Sobrescrevendo para adicionar um limite na ContaCorrente
  if (valor > this.saldo + this.limite) {
    console.log(`Você estourou o seu limite de saque: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.construtor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log("-----------------------------");

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

/*
  Polimorfismo:
  O polimorfismo é demonstrado aqui pela sobrescrita do método `sacar` na classe `ContaCorrente`.
  Enquanto a classe base `Conta` define um método `sacar` que simplesmente desconta o valor do saldo,
  a classe `ContaCorrente` sobrescreve este método para incluir uma verificação de limite.
  Isso permite que instâncias de `ContaCorrente` se comportem de maneira diferente das instâncias da 
  classe `ContaPoupanca` e `Conta` ao executar o mesmo método, exibindo um comportamento específico 
  conforme a classe.
*/
