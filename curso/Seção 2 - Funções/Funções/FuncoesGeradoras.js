// Definindo um gerador simples que gera três valores
function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1.next().value); // Imprime "Valor 1"
console.log(g1.next().value); // Imprime "Valor 2"
console.log(g1.next().value); // Imprime "Valor 3"
console.log(g1.next().value); // Imprime undefined, pois não há mais valores a serem gerados

// Definindo um gerador infinito que gera uma sequência de números inteiros
function* geradora2() {
  let i = 0;

  // Loop infinito vai gerar valores infinitos conforme o next().value é chamado
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value); // Imprime 0
console.log(g2.next().value); // Imprime 1
console.log(g2.next().value); // Imprime 2
console.log(g2.next().value); // Imprime 3

// Definindo um gerador que gera uma sequência de números de 0 a 2
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

// Definindo um gerador que delega parte da geração para outro gerador
function* geradora4() {
  yield* geradora3(); // Continua a partir da geradora3
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor); // Imprime 0, 1, 2, 3, 4, 5
}

// Definindo um gerador que gera funções
function* geradora5() {
  yield function () {
    console.log("Primeira função");
  };

  yield function () {
    console.log("Segunda função");
  };
}

const g5 = geradora5();
const func1 = g5.next().value; // Obtém a primeira função gerada
const func2 = g5.next().value; // Obtém a segunda função gerada

// Executa as funções geradas
func1(); // Imprime "Primeira função"
func2(); // Imprime "Segunda função"
