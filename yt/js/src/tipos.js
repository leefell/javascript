// Strings
const firstName = 'Alexandre'
const lastName = 'Augusto'

const names = "Alexandre,Gabriel,Rafael,Marcelo"

console.log('Meu nome é ' + firstName + ' ' + lastName)
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)

console.log(names.split(','))

// Number
const number = 5;
console.log(number.toString())
console.log(typeof number.toString())

// Booleanos

console.log(2 == 2)
console.log(2 == 3)

// Null & Undefined

const x = null;
const y = undefined;
console.log(typeof x)
console.log(typeof y)

const list = [1,2,3,4,5];
object = {name: 'Alexandre'}