// Operadores de Comparação
let a = 10;
let b = 20;

console.log("Operadores de Comparação:");
console.log("a == b:", a == b); // igual a (==)
console.log("a != b:", a != b); // diferente de (!=)
console.log("a === 10:", a === 10); // estritamente igual a (===)
console.log("a !== 20:", a !== 20); // estritamente diferente de (!==)
console.log("a > b:", a > b); // maior que (>)
console.log("a < b:", a < b); // menor que (<)
console.log("a >= 10:", a >= 10); // maior ou igual a (>=)
console.log("a <= 20:", a <= 20); // menor ou igual a (<=)

// Operadores Lógicos
let c = true;
let d = false;

console.log("\nOperadores Lógicos:");
console.log("c && d:", c && d); // E lógico (&&)
console.log("c || d:", c || d); // OU lógico (||)
console.log("!c:", !c); // NÃO lógico (!)

// Exemplos combinados
console.log("\nExemplos combinados:");
console.log("(a < b) && (c == true):", (a < b) && (c == true)); // combinação de comparação e E lógico
console.log("(a > b) || (d == false):", (a > b) || (d == false)); // combinação de comparação e OU lógico

// Condicional ternário
let resultado = (a > b) ? "a é maior que b" : "a não é maior que b";
console.log("\nCondicional ternário:");
console.log("resultado:", resultado);

// Avaliação de Curto-circuito
console.log("\nAvaliação de Curto-circuito:");

// Operador lógico E (&&) - curto-circuito ocorre se a primeira expressão é falsa
console.log("false && qualquerCoisa:", false && (a = 30));
console.log("Valor de a após curto-circuito (deveria ser 10):", a);

// Operador lógico OU (||) - curto-circuito ocorre se a primeira expressão é verdadeira
console.log("true || qualquerCoisa:", true || (b = 40));
console.log("Valor de b após curto-circuito (deveria ser 20):", b);

// Valores "falsy"
console.log("\nValores 'falsy':");
console.log("false:", Boolean(false)); // false
console.log("0:", Boolean(0)); // false
console.log("'' (string vazia):", Boolean('')); // false
console.log("null:", Boolean(null)); // false
console.log("undefined:", Boolean(undefined)); // false
console.log("NaN:", Boolean(NaN)); // false

// Exemplos de curto-circuito com valores "falsy"
console.log("\nCurto-circuito com valores 'falsy':");

let falsyValue = 0;
console.log("falsyValue && (a = 30):", falsyValue && (a = 30));
console.log("Valor de a após curto-circuito (deveria ser 10):", a);

let truthyValue = "non-empty string";
console.log("truthyValue || (b = 40):", truthyValue || (b = 40));
console.log("Valor de b após curto-circuito (deveria ser 20):", b);

const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'; // vermelho é avaliado como true ent ele ja é retornado
console.log(corPadrao);

