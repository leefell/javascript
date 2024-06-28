// const pessoa = {
//     nome: 'Alexandre',
//     sobrenome: 'Augusto',
//     idade: 19
// };

// console.log(pessoa.nome);

// Função que cria e retorna um objeto
function criaPessoa(nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }; 
}

function criaPessoaReduzido(nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Alexandre', 'Augusto', 19); 
const pessoa2 = criaPessoaReduzido('Gabriel', 'Tangerina', 19); 
const pessoa3 = criaPessoa('Rafael', 'Callegari', 21); 
const pessoa4 = criaPessoaReduzido('Marcelo', 'Gallo', 19); 

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

const pessoaComFuncao = {
    nome: 'Alex',
    sobrenome: 'Hanma',
    idade: 19,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} diz oi!`);
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoaComFuncao.incrementaIdade();
pessoaComFuncao.fala();
