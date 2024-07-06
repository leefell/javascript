// 01/01/1970 - TimeStamp Unix
// 0 - Janeiro | 11 - Dezembrp
// ano, mes, dia, hora, minuto, segundo, milisegundo
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;

// const data = new Date(2024, 3, 20, 15, 14, 27);
// console.log(data.toString());

// console.log('Dia:', data.getDate());
// console.log('Mes:', data.getMonth());
// console.log('Ano:', data.getFullYear());
// console.log('Hora:', data.getHours());
// console.log('Minuto:', data.getMinutes());
// console.log('Segundo:', data.getSeconds());
// console.log('ms:', data.getMilliseconds());
// console.log('Dia da semana:', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);