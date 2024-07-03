const h1 = document.querySelector('.container h1');
const data = new Date();

function getDia(numeroDia){
    const diasDaSemana = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
        'quinta-feira', 'sexta-feira', 'sábado'];
        
    return diasDaSemana[numeroDia]
}

function getMes(numeroMes){
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 
        'junho', 'julho', 'agosto', 'setembro', 'outubro', 
        'novembro', 'dezembro'];

    return meses[numeroMes]
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