let a = 10;
let b = 3;

// Adição (+)
let adicao = a + b;
console.log(`${a} + ${b} = ${adicao}`);

// Subtração (-)
let subtracao = a - b;
console.log(`${a} - ${b} = ${subtracao}`);

// Multiplicação (*)
let multiplicacao = a * b;
console.log(`${a} * ${b} = ${multiplicacao}`);

// Divisão (/)
let divisao = a / b;
console.log(`${a} / ${b} = ${divisao}`);

// Módulo (resto da divisão) (%)
let modulo = a % b;
console.log(`${a} % ${b} = ${modulo}`);

// Exponenciação (**)
let exponenciacao = a ** b;
console.log(`${a} ** ${b} = ${exponenciacao}`);

// Incremento (++)
let incremento = a;
incremento++;
console.log(`Incremento de ${a} é ${incremento}`);
++incremento;
console.log(`Pré-Incremento de ${a} é ${incremento}`);

// Decremento (--)
let decremento = a;
decremento--;
console.log(`Decremento de ${a} é ${decremento}`);
--decremento;
console.log(`Pré-Decremento de ${a} é ${decremento}`);

// parseInt -> string pra inteiro
// parseFloat -> string pra decimal
// Number -> não converte a string pra número independente do tipo
const num1 = 10;
const num2 = parseInt('10')
console.log(num1 + num2);

const num3 = 10;
const num4 = Number('10')
console.log(num3 + num4);