// let n1 = 1.593408509438534;
// let n2 = 2.5;

// console.log(n1.toString() + n2);
// n1 = n1.toString();
// console.log(n1.toString(2)); // ver o binario
// console.log(n1.toFixed(2)); // fixa as casas decimais
// console.log(Number.isInteger(n1));
// let temp = n1 * 'oi';
// console.log(Number.isNaN(temp));

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8 
num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1);

num1 = parseFloat(num1.toFixed(2));
console.log(num1);