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
