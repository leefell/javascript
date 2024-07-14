// criaCalculadora é uma factory function que retorna um objeto (calculadora)
function criaCalculadora() {
  return {
    display: document.querySelector(".display"), // seleciona o elemento com a classe display

    inicia: function () {
      // método que inicia os principais eventos
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    realizaConta: function () {
      let conta = this.display.value; // obtém o valor do display

      try {
        conta = eval(conta); // avalia a expressão matemática no display

        if (!conta && conta !== 0) {
          // verifica se a conta é válida
          alert("Conta Inválida!");
          return;
        }

        this.display.value = String(conta); // atualiza o display com o resultado da conta
      } catch (e) {
        alert("Conta Inválida!");
      }
    },

    // Função para limpar o display
    clearDisplay: function () {
      this.display.value = "";
    },

    // Função para apagar o último caractere no display
    apagaUm: function () {
      this.display.value = this.display.value.slice(0, -1);
    },

    // Função principal para adicionar evento de clique aos botões
    cliqueBotoes: function () {
      document.addEventListener("click", (evento) => {
        const elemento = evento.target;

        // Verifica a classe do elemento clicado e executa a ação correspondente
        if (elemento.classList.contains("btn-num")) {
          this.btnParaDisplay(elemento.innerText);
        }

        if (elemento.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (elemento.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (elemento.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    // Função para permitir calcular a expressão ao pressionar a tecla Enter
    pressionaEnter: function () {
      this.display.addEventListener("keyup", (evento) => {
        if (evento.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    // Adiciona o valor do botão pressionado ao display
    btnParaDisplay: function (valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

// Exemplo de uso de function tradicional com bind para manter o this correto
// cliqueBotoes: function () {
//   document.addEventListener(
//     "click",
//     function (evento) {
//       const elemento = evento.target;

//       if (elemento.classList.contains("btn-num")) {
//         this.btnParaDisplay(elemento.innerText);
//       }

//       if (elemento.classList.contains("btn-clear")) {
//         this.clearDisplay();
//       }

//       if (elemento.classList.contains("btn-del")) {
//         this.apagaUm();
//       }

//       if (elemento.classList.contains("btn-eq")) {
//         this.realizaConta();
//       }
//     }.bind(this) // bind(this) -> referencia a calculadora e não o 'document'
//   );
// },
