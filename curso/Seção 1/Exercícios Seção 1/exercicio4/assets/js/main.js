const paragrafos = document.querySelector('.paragrafos');
// Selecionando todos os paragráfos dentro da Div
const paragrafoNodeList = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

// Acessando o estilo do paragrafo pelo js
for(let paragrafo of paragrafoNodeList){
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = '#FFFFFF';
}