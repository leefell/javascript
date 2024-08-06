const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// Rotas da home
route.get("/", homeController.paginaInicial);

// Rotas de Contato
route.get("/contato", contatoController.paginaInicial);
route.post("/contato", contatoController.trataContato);

module.exports = route;
