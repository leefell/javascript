function randomNumber(min, max){
    const operacao = Math.random() * (max - min) + min;
    return Math.floor(operacao);
}

const min = 1;
const max = 50;
let rand = 10;

// Checa a condição e executa o laço
while(rand !== 10){
    rand = randomNumber(min, max);
    console.log(rand);
}
console.log("While normal não foi executado.");

// Executa o código primeiro e depois checa a condição  
do{
    rand = randomNumber(min,max);
    console.log(rand);
}while(rand !== 10);