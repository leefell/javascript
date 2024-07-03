const h1 = document.querySelector('.container h1'); // pega o elemento dentro de h1 e guarda na variavel
const data = new Date(); // instancia uma nova data atual do sistema

function getDia(numeroDia){
    const diasDaSemana = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
        'quinta-feira', 'sexta-feira', 'sábado']; // cria um array de 7 posições
        
    return diasDaSemana[numeroDia] // retorna o array no elemento recebido 
}

function getMes(numeroMes){
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 
        'junho', 'julho', 'agosto', 'setembro', 'outubro', 
        'novembro', 'dezembro']; // cria um array de 12 posicoes

    return meses[numeroMes] // retorna o array no elemento recebido
}

function zeroAEsquerda(num){    
    return num >= 10 ? num : `0${num}`; // formata o número adicionando 0 caso ele seria menor que 10
}

function criaData(data){
    const diaSemana = data.getDay(); // declara uma variavel que pega o dia da data que foi instanciada
    const numeroMes = data.getMonth(); // declarar uma variavel que pega o mes da data que foi instanciada

    const nomeDia = getDia(diaSemana); // declara uma variavel que recebe o retorno da funcao getDia()
    const nomeMes = getMes(numeroMes); // declara uma variavel que recebe o retorno da funcao getMes()

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    ); // retorna a data de maneira formatada
}

h1.innerHTML = criaData(data);