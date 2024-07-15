// Função rand(min, max): Gera um número aleatório entre 'min' e 'max'.
// Os valores padrão são min = 1000 e max = 3000, resultando em um intervalo de 1 a 3 segundos.
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min; // Gera um número aleatório entre min e max
    return Math.floor(num); // Arredonda o número para baixo
}

// Função f1(callback): Exibe 'f1' no console após um tempo aleatório e executa o callback (se fornecido)
function f1(callback) {
    setTimeout(function() {
        console.log('f1'); // Exibe 'f1' no console
        if (callback) callback(); // Executa o callback se ele for fornecido
    }, rand()); // Tempo aleatório entre 1 e 3 segundos
}

// Função f2(callback): Exibe 'f2' no console após um tempo aleatório e executa o callback (se fornecido)
function f2(callback) {
    setTimeout(function() {
        console.log('f2'); // Exibe 'f2' no console
        if (callback) callback(); // Executa o callback se ele for fornecido
    }, rand()); // Tempo aleatório entre 1 e 3 segundos
}

// Função f3(callback): Exibe 'f3' no console após um tempo aleatório e executa o callback (se fornecido)
function f3(callback) {
    setTimeout(function() {
        console.log('f3'); // Exibe 'f3' no console
        if (callback) callback(); // Executa o callback se ele for fornecido
    }, rand()); // Tempo aleatório entre 1 e 3 segundos
}

// Encadear os callbacks diretamente:
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Essa mensagem vai aparecer depois de todos os callbacks.');
//         });
//     });
// });

// Em vez de encadear diretamente os callbacks, podemos definir funções de callback separadas:
f1(f1Callback); // Inicia a sequência chamando f1 com f1Callback

function f1Callback() {
    f2(f2Callback); // Após f1 terminar, chama f2 com f2Callback
}

function f2Callback() {
    f3(f3Callback); // Após f2 terminar, chama f3 com f3Callback
}

function f3Callback() {
    console.log('Essa mensagem vai aparecer depois de todos os callbacks.'); // Após f3 terminar, exibe a mensagem final
}
