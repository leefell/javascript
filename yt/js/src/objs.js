// Objetos guardam valores dentro de propriedades
// const person = {
//     firstName: 'Alexandre',
//     lastName: 'Augusto',
//     age: 19,
//     hobbies: ['Academia', 'Escutar Música', 'Dirigir'],
//     cat:{
//         catName: ['Amonet', 'Afrodite']
//     }
// };

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Mesma coisa que acima só que com Destructuring
// const {firstName: primeiroNome, lastName, age, hobbies} = person

// const drive = person.hobbies[2];

// console.log(primeiroNome);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);
// console.log(drive);

// console.log(person.cat.catName)

const toDos = [
    {
        id:1,
        description: 'Estudar',
        isCompleted:true
    },
    {
        id:2,
        description: 'Treinar',
        isCompleted:true
    },
    {
        id:3,
        description: 'Dormir',
        isCompleted:false
    },
];

const descriptionOfLastTodo = toDos[2].description
console.log(descriptionOfLastTodo);