function getDia(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2: 
            diaSemanaTexto = 'Terca';
            break; 
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = 'Seu dia ta fora do range.';       
    }

    return diaSemanaTexto;
}

const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTexto = getDia(diaSemana);

console.log(diaSemana, diaSemanaTexto);