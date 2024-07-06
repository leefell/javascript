const pessoa = {
    nome: 'Alexandre',
    sobrenome: 'Augusto',
    idade: 19,
    endereco:{
        rua: 'Avenida tal',
        numero: 321
    }
};

// Atribuição via desestruturação
const { nome, sobrenome = 'Valor padrão'} = pessoa; // Extraindo do objeto pessoa a chave nome
console.log(nome, sobrenome);

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

const { idade, ...resto} = pessoa;
console.log(resto);