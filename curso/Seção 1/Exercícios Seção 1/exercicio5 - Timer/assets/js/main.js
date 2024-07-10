const relogio = document.querySelector('.relogio') // Pega quem ta na classe relogio
let segundos = 0; // inicia a variavel global segundos
let timer; // declara um timer;

function getTimeFromSeconds(seconds){
    // Instancia uma data que recebe como argumento os segundos * 1000 para tornar milisegundos
    const date = new Date(seconds * 1000); 
    return date.toLocaleTimeString('pt-BR', { // formata a data
        hour12:false,
        timeZone: 'GMT'
    });
}

function iniciaRelogio(){
    timer = setInterval(function(){ 
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000); // A cada um segundo soma 1 na variavel
}

document.addEventListener('click', function(evento){ // Adiciona o evento de click
    const elemento = evento.target; // guarda o target que vem do evento em uma variavel

    if(elemento.classList.contains('iniciar')){ // verifica se o tem a classe 'iniciar' no target
        relogio.classList.remove('pausado'); // tira a cor vermelha do timer;
        clearInterval(timer); // Não criar dois timers na mesma página, cada click zera e iniciar um timer
        iniciaRelogio();
    }

    if(elemento.classList.contains('pausar')){ // verifica se o tem a classe 'pausar' no target
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if(elemento.classList.contains('zerar')){ // verifica se o tem a classe 'zerar' no target
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;a
    }
});