// For in -> lê os índice ou chaves do objeto
// const frutas = ['Pera', 'Uva', 'Morango']

// for(let i in frutas){
//     console.log(frutas);
// }

const pessoa = {
    nome: "João Silva",
    idade: 30,
    genero: "Masculino",
    email: "joao.silva@example.com",
    telefone: "(11) 1234-5678",
    cpf: "123.456.789-00",
    estadoCivil: "Solteiro",
    profissao: "Desenvolvedor de Software"
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// const chave = 'nome';
// console.log(pessoa[chave]);