import "core-js/stable";
import "regenerator-runtime/runtime";
import "./assets/css/style.css";

import LoginCadastroValidator from "./modules/LoginCadastroValidator";

const login = new LoginCadastroValidator(".form-login");
const cadastro = new LoginCadastroValidator(".form-cadastro");
login.init();
cadastro.init();
