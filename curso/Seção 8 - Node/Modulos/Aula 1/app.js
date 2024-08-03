// Módulos instalados não requerem caminho.
const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

axios("http://code.jsontest.com")
  .then((response) => console.log(response.data))
  .catch((e) => console.log(e));
