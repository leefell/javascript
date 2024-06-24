// Função com valores padrão para os parâmetros
function soma(x = 1, y = 1) { 
    return x + y;
}

console.log(soma(4)); // 5
console.log(soma('Alexandre', ' Augusto')); // 'Alexandre Augusto'

// Função anônima
const raiz = function(n) {
    return n ** 0.5; 
};

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5

// Arrow function
const quadrado = (n) => {
    return n * n;
}

// Versão reduzida da arrow function
// const quadrado = n => n * n;
