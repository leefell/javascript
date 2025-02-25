let input = document.getElementById("inputTask");
let addTask = document.getElementById("addTask");
let ul = document.getElementById("taskList");

function addNewTask() {
  let task = input.value.trim();

  if (task === "") return;

  let existingTasks = document.querySelectorAll("#taskList li span");
  for (let existingTask of existingTasks) {
    if (existingTask.textContent.toLowerCase() === task.toLowerCase()) {
      alert("Essa tarefa já existe!");
      return;
    }
  }

  localStorage.setItem("Tarefas", task);

  let li = document.createElement("li");

  // Criar o span para o texto da tarefa
  let taskSpan = document.createElement("span");
  taskSpan.textContent = task;

  // Criar div para agrupar os botões
  let buttonGroup = document.createElement("div");
  buttonGroup.classList.add("button-group");

  // Criar botão de check
  let checkButton = document.createElement("button");
  checkButton.classList.add("fa-solid", "fa-check");
  checkButton.setAttribute("aria-label", "Marcar como concluído");
  checkButton.addEventListener("click", function () {
    taskSpan.classList.toggle("completa");
  });

  // Criar botão de delete
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("fa-solid", "fa-trash");
  deleteButton.setAttribute("aria-label", "Excluir tarefa");
  deleteButton.addEventListener("click", function () {
    ul.removeChild(li);
  });

  // Adicionar botões ao grupo de botões
  buttonGroup.appendChild(checkButton);
  buttonGroup.appendChild(deleteButton);

  // Adicionar elementos ao li
  li.appendChild(taskSpan);
  li.appendChild(buttonGroup);

  // Adicionar li à lista
  ul.appendChild(li);

  // Limpar o input
  input.value = "";
}

// Adicionar evento ao botão
addTask.addEventListener("click", addNewTask);

// Permitir adicionar com a tecla Enter
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNewTask();
  }
});
