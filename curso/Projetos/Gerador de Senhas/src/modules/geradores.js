const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); // Começo-Fim de maiúsculas na ASCII
const geraMinuscula = () => String.fromCharCode(rand(97, 123)); // Começo-Fim de minúsculas na ASCII
const geraNumero = () => String.fromCharCode(rand(48, 58)); // Começo-Fim de números na ASCII
const simbolos = ",.;/:?!@#$%¨&*={}[+-";
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maiusculas,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join("").slice(0, qtd);
}
