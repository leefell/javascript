// Map executa uma determinada função em cada item dessa lista
// e retorna uma nova lista.
const numbers = [1,2,3,4,5];

const numbersMultipliedByTwo = numbers.map(function(elemento){
    return elemento * 2
})

console.log(numbers)
console.log(numbersMultipliedByTwo)

// Filter checa uma condição e retorna uma nova lista.
const ages = [8,4,10,11,19,22,27,40]; 

const evenAges = ages.filter(function(elemento){
    return elemento % 2 === 0
})

const odAges = ages.filter(function(elemento){
    return elemento % 2 != 0
})

console.log(evenAges)
console.log(odAges)

// Reduce -> reduzir todos os valores de uma lista pra um só.
const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age
}, 0); // esse 0 é o valor do accumulator

console.log(sumOfAges)