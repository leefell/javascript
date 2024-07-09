// Escreva uma função chamada ePaisagem que recebe dois
// argumentos, largura e altura de uma imagem, e retorna true
// se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(600,400));
console.log(ePaisagem(1080,1920));