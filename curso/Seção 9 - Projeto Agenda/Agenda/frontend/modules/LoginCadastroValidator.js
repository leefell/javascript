import validator from "validator";

export default class LoginCadastroValidator {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const elemento = e.target;
    const emailInput = elemento.querySelector('input[name="email"]');
    const passwordInput = elemento.querySelector('input[name="password"]');
    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      this.criaErro(emailInput, "E-mail inválido.");
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.criaErro(passwordInput, "Senha precisa ter entre 3 e 50 caracteres");
      error = true;
    }

    if (!error) elemento.submit();
  }

  criaErro(campo, msg) {
    this.removeErro(campo);

    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("text-danger");
    campo.insertAdjacentElement("afterend", div);
  }

  removeErro(campo) {
    const erroExistente = campo.nextElementSibling;
    if (erroExistente && erroExistente.classList.contains("text-danger")) {
      erroExistente.remove();
    }
  }

  limpaErros() {
    const erros = Array.from(this.form.querySelectorAll(".text-danger"));
    erros.forEach((erro) => erro.remove());
  }
}
