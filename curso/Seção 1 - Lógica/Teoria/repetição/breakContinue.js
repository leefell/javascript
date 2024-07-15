const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros){
    if(numero === 2){
        console.log('Pulando o 2');
        continue;
    }

    if(numero == 5){
        console.log('Achei o 5, saindo do laço.');
        break;
    }

    console.log(numero);

}