function Calculadora() {
  this.display = document.querySelector(".display"); // Seleciona o elemento do display

  // Método de inicialização da calculadora
  this.inicia = () => {
    this.capturaCliques(); // Captura cliques nos botões
    this.capturaEnter(); // Captura pressionamento da tecla Enter
  };

  // Método para capturar cliques nos botões
  this.capturaCliques = () => {
    document.addEventListener("click", (evento) => {
      const elemento = evento.target;

      // Verifica a classe do elemento clicado e executa a ação correspondente
      if (elemento.classList.contains("btn-num")) this.addNumDisplay(elemento);
      if (elemento.classList.contains("btn-clear")) this.clear();
      if (elemento.classList.contains("btn-del")) this.del();
      if (elemento.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  // Método para capturar o pressionamento da tecla Enter
  this.capturaEnter = () => {
    document.addEventListener("keyup", (evento) => {
      if (evento.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  // Método para realizar a conta e atualizar o display
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value); // Avalia a expressão matemática no display

      if (!conta && conta !== 0) {
        // Verifica se a conta é válida, incluindo o caso de zero
        alert("Conta inválida");
        return;
      }

      this.display.value = conta; // Atualiza o display com o resultado da conta
    } catch (evento) {
      alert("Conta inválida");
      return;
    }
  };

  // Método para adicionar o número pressionado ao display
  this.addNumDisplay = (elemento) => {
    this.display.value += elemento.innerText;
    this.display.focus(); // Mantém o foco no display
  };

  // Método para limpar o display
  this.clear = () => (this.display.value = "");

  // Método para apagar o último caractere do display
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.inicia(); // Inicializa a calculadora
