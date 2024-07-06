const elementos = [
    {tag: 'p', texto: 'A vida é uma coleção de momentos, aproveite cada um deles.'},
    {tag: 'div', texto: 'A felicidade está nas pequenas coisas do dia a dia.'},
    {tag: 'footer', texto: 'Os desafios nos fazem crescer e evoluir.'},
    {tag: 'section', texto: 'O tempo é o bem mais precioso que temos, use-o com sabedoria.'},
]; // Instancia um array de de objetos em que cada um possui uma tag e um texto

// Instancia uma variavel que recebe o valor do container
const container = document.querySelector('.container');  

// Intancia uma variavel que cria uma div 
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){ // Percorre o Array
    // Desestruturando o array em tag e texti
    let {tag, texto} = elementos[i]; 
    let tagCriada = document.createElement(tag); // vai criar um elemento diferente a cada iteração
    let textoCriado = document.createTextNode(texto); // cria um nó de texto

    tagCriada.appendChild(textoCriado); // adiciona o textoCriado na tag
    div.appendChild(tagCriada); // adiciona a tag na div
}

container.appendChild(div); // adiciona a div no container