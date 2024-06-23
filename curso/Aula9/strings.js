// Template strings
// let palavra = 'legal'
// console.log(`A palavra é: ${palavra}`);

// Indice        01234567
let umaString = 'Um texto';
// console.log(umaString.charAt(5));
// console.log(umaString.concat(' ', 'em', ' ', 'um'));
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('x'));

console.log(umaString.match(/[a-z]/g)); // isso é uma expressão regular
console.log(umaString.replace('Um', 'Outra'));

let frase = 'O rato roeu a roupa do rei de roma.';
console.log(frase.replace(/r/, 'G')); // O gato roeu a roupa do rei de roma

console.log(frase.length);
if(frase.length >= 35){
    console.log("a quantidade de caracter é maior ou igual a 35");
}else{
    console.log("a quantidade de caracter é menor que 35");
}
//                    Ini Fim
console.log(frase.slice(2,6));

console.log(frase.split(' ',3));