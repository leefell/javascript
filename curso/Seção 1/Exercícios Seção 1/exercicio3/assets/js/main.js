const elementos = [
    {tag: 'p', texto: 'A vida é uma coleção de momentos, aproveite cada um deles.'},
    {tag: 'div', texto: 'A felicidade está nas pequenas coisas do dia a dia.'},
    {tag: 'footer', texto: 'Os desafios nos fazem crescer e evoluir.'},
    {tag: 'section', texto: 'O tempo é o bem mais precioso que temos, use-o com sabedoria.'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    // Desestruturando o array
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); // vai criar um elemento diferente a cada iteração
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);