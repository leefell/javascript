const condicao = true;
// Let tem escopo de bloco { ... bloco }
// Var tem escopo de função

let nome = 'Alexandre';
var nome2 = 'Ana';

if(condicao){
    let nome = 'Augusto'; // criando um nome dentro do escopo do if
    var nome2 = 'Laura'; // redeclarando

    if(condicao){
        var nome2 = 'Aninha'; // redeclarando
        let nome = 'Santos';
    }
}

console.log(nome, nome2);

var sobrenome = 'Augusto'
function escopoFuncao(){

    if(condicao){
        let nome = 'Alex'
        var sobrenome = 'Augu'
    }

    console.log(sobrenome);
}
escopoFuncao()


console.log(elevacaoDeclaracao);
var elevacaoDeclaracao = 'Var possuem sua declaração elevada.'
console.log(elevacaoDeclaracao);
