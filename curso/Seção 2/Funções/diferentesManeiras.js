// Diferentes maneiras de declarar uma função em JS


// Declaração Literal (Function Hoisting -> Elevar declarações) de funções
// e variáveis com a palavra var para o topo do arquivo na hora da execução.
function falaOi(){
    console.log('Oi');
}

// First-Class Objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Uma constante está recebendo essa função!');
};

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
};

const soma = (x,y) =>{
    return x * y;
}

// Dentro de um Objeto
const obj = {
    falar: function(){
        console.log('Bla bla bla');
    },
    andar(){
        console.log('Estou andando');
    }
};
obj.falar();
obj.andar();
