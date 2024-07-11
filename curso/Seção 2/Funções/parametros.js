// No JS existe uma variável local chamada arguments, que cobre todos os argumentos 
// que são passados em uma função (exclusivo para funções definidas com function).

// Função que soma todos os argumentos passados
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // Chama a função com múltiplos argumentos

// Função que soma três números com valores padrão para os dois últimos parâmetros
function soma(a, b = 2, c = 5) {
    console.log(a + b + c);
}
soma(1); // a = 1, b = 2 (padrão), c = 5 (padrão)
soma(2, 5); // a = 2, b = 5, c = 5 (padrão)
soma(1, undefined, 2); // a = 1, b = 2 (padrão), c = 2

// Objeto pessoa para exemplo de desestruturação
const pessoa = {
    nome: 'Alexandre',
    sobrenome: 'Augusto',
    idade: 19,
    endereco: {
        rua: 'Avenida tal',
        numero: 321
    }
};

// Função que desestrutura um objeto
function desestruturacaoObj({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
desestruturacaoObj(pessoa); // Chama a função com o objeto pessoa
desestruturacaoObj({ nome: 'Fulano', sobrenome: 'Fulanin', idade: 21 }); // Chama a função com um novo objeto

// Função que desestrutura um array
// ... -> rest operator (resto)
function desestruturacaoArray([valor1, valor2, valor3, ...resto]) {
    console.log(valor1, valor2, valor3, ...resto);
}

const example = [1, 2, 3, 'Arroz', 'Feijao'];
desestruturacaoArray(example); // Chama a função com o array example

console.log('------------------------------------------------------');

// Função que realiza operações matemáticas com múltiplos argumentos
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
conta('-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
conta('/', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
conta('*', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Mudando para function expression
const contaExpressao = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

// Mudando para arrow function
const contaArrow = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

// Testando a function expression
contaExpressao('+', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
contaExpressao('-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Testando a arrow function
contaArrow('/', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
contaArrow('*', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
