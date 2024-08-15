export default class ContatosValidator {
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
    const el = e.target;
    const nomeInput = el.querySelector("input[name=nome]");
    const emailInput = el.querySelector("input[name=email]");
    let error = false;

    if (nomeInput.value.trim() === "") {
      this.criaErro(
        nomeInput,
        "O nome é obrigatório para registrar um contato."
      );
      error = true;
    }

    if (emailInput.value !== "" && !validator.isEmail(emailInput.value)) {
      this.criaErro(emailInput, "O e-mail digitado é inválido.");
      error = true;
    }

    if (!error) el.submit();
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
