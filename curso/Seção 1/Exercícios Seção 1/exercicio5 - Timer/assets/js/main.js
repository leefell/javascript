function getTimeFromSeconds(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000); // A cada um segundo soma 1 na variavel
}

iniciar.addEventListener('click', function(evento){
    relogio.classList.remove('pausado'); // tira a cor vermelha do timer;
    clearInterval(timer); // Não criar dois timers na mesma página, cada click zera e iniciar um timer
    iniciaRelogio();
});

pausar.addEventListener('click', function(evento){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(evento){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});