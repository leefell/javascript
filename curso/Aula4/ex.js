/*
Alexandre Augusto tem 19 anos, pesa 88 kg
tem 1.84 de altura e seu IMC é de {algum valor}
Alexandre nasceu em 2004;
*/

const nome = 'Alexandre';
const sobreNome = 'Augusto';
const idade = 19;
const peso = 88;
const altura = 1.84;
let imc = peso/(altura * altura)
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);