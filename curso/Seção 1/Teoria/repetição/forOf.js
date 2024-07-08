//            0123456...
const nomes = ['Alexandre', 'Ana', 'Gabriel']

console.log('For Classico');
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('For In');
for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('For Of');
for (let valor of nomes) {
    console.log(valor);
}

// forEach 
nomes.forEach(function (valor, indice) {
    console.log(valor, indice);
});

// For clássico - Geralmente com iteráveis(array/string)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays, ou strings)