// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

// Utilizando um evento para parar o envio do formulário
form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso'); 
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); 

    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    }    

    if(!altura){
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
}

// Essa função cria um paragrafo
function criaParagrafo(){
    const paragrafo = document.createElement('p') // Cria paragrafo
    return paragrafo;
}

// Essa função serve para adicionar alguma coisa dentro do resultado no HTML
function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // Zera resultado
    
    
    const paragrafo = criaParagrafo();
    
    if(isValid){
        paragrafo.classList.add('paragrafo-resultado');
    }else{
        paragrafo.classList.add('bad')
    }

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);
}