// Closure é a habilidade da função de acessar seu escopo léxico 
// mesmo após a função externa ter terminado a execução.

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Fulano'); // Closure 1 Nome => Fulano
const funcao2 = retornaFuncao('Ciclano'); // Closure 2 Nome => Ciclano
console.log(funcao(), funcao2());

function criaContador(){
    let contador = 0;

    return function(){
        contador++;
        return contador;
    };
}

const contador1 = criaContador(); // Closure 1
const contador2 = criaContador(); // Closure 2

console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

console.log(contador2());
console.log(contador2());
console.log(contador2());
console.log(contador2());