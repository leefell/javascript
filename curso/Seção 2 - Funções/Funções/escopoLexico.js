// Escopo Léxico significa que a função conhece as variáveis definidas em seu escopo e nos escopos 
// superiores, até chegar ao escopo global.
// A função busca as variáveis de dentro para fora, ou seja, do escopo mais interno para o escopo mais externo.

const nome = 'Ana';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();
