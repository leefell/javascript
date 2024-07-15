// Seleção de elementos do DOM
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Função para criar um novo elemento <li>
function criaLi(){
    const li = document.createElement('li');
    return li;
}

// Função para criar um botão "Apagar" e adicioná-lo a um <li>
function criaBotaoApagar(li){
    li.innerText += ' '; // Espaçar o botão da li
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); // Definir a classe do botão
    botaoApagar.setAttribute('title', 'Apagar essa tarefa.'); // Definir o título do botão
    li.appendChild(botaoApagar); // Adicionar o botão ao <li>
}

// Função para criar uma nova tarefa
function criaTarefa(textoInput){
    const li = criaLi(); // Criar um novo <li>
    li.innerText = textoInput; // Definir o texto do <li>
    tarefas.appendChild(li); // Adicionar o <li> à lista de tarefas
    limpaInput(); // Limpar o campo de input
    criaBotaoApagar(li); // Adicionar o botão "Apagar" ao <li>
    salvarTarefas(); // Salvar as tarefas no localStorage
}

// Função para limpar o campo de input e focar novamente nele
function limpaInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}

// Função para salvar as tarefas no localStorage
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li'); // Selecionar todas as tarefas
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Remover o texto do botão "Apagar"
        listaDeTarefas.push(tarefaTexto); // Adicionar o texto da tarefa à lista
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Converter a lista para JSON
    localStorage.setItem('tarefas', tarefasJSON); // Salvar no localStorage
}

// Função para recuperar as tarefas salvas no localStorage
function recuperaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); // Obter as tarefas do localStorage
    const listaDeTarefas = JSON.parse(tarefas); // Decodificar o JSON de volta para um objeto JS

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa); // Criar cada tarefa a partir da lista salva
    }
}

// Área de EventListener

// Adiciona um event listener para capturar o evento de tecla pressionada no input
inputTarefa.addEventListener('keypress', function(evento){
   if(evento.keyCode === 13){ // Verifica se a tecla pressionada é o ENTER
    if(!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
    criaTarefa(inputTarefa.value); // Cria uma nova tarefa com o texto do input
    }
});

// Adiciona um event listener para capturar o evento de clique no botão de adicionar tarefa
btnTarefa.addEventListener('click', function(evento){
    if(!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
    criaTarefa(inputTarefa.value); // Cria uma nova tarefa com o texto do input
});

// Adiciona um event listener para capturar o evento de clique em qualquer parte do documento
document.addEventListener('click', function(evento){
    const elemento = evento.target;
    if(elemento.classList.contains('apagar')){ // Verifica se o elemento clicado é o botão "Apagar"
        elemento.parentElement.remove(); // Remove o elemento pai (a tarefa)
        salvarTarefas(); // Atualiza o localStorage após remover a tarefa
    }
});

// Ao recarregar a página, recupera as tarefas salvas no localStorage
recuperaTarefasSalvas();
