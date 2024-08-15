import "core-js/stable";
import "regenerator-runtime/runtime";
import "./assets/css/style.css";

import LoginCadastroValidator from "./modules/LoginCadastroValidator";
import ContatosValidator from "./modules/ContatosValidator";

const login = new LoginCadastroValidator(".form-login");
const cadastro = new LoginCadastroValidator(".form-cadastro");
login.init();
cadastro.init();

const contatos = ContatosValidator(".contato-form");
contatos.init();
