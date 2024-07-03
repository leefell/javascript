const h1 = document.querySelector('.container h1');
const data = new Date();

function getDia(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2: 
            diaSemanaTexto = 'Terca-Feira';
            break; 
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = 'Seu dia ta fora do range.';       
    }

    return diaSemanaTexto;
}

function getMes(mes){
    let mesTexto;

    switch(mes){
        case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 2: 
            mesTexto = 'Março';
            break; 
        case 3:
            mesTexto = 'Abril';
            break;
        case 4:
            mesTexto = 'Maio';
            break;
        case 5:
            mesTexto = 'Junho';
            break;
        case 6:
            mesTexto = 'Julho';
            break;
        case 7:
            mesTexto = 'Agosto';
            break;    
        case 8:
            mesTexto = 'Setembro';
            break;
        case 9:
            mesTexto = 'Outubro';
            break;
        case 10:
            mesTexto = 'Novembro';
            break;
        case 11:
            mesTexto = 'Dezembro';
            break;    
        default:
            mesTexto = 'Seu mês ta fora do range.';       
    }

    return mesTexto;
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDia(diaSemana);
    const nomeMes = getMes(numeroMes); 

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data); 

// Todo esse código acima pode ser simplificado com:
// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dataStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);