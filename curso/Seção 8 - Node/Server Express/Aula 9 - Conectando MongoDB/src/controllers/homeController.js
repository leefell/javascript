const HomeModel = require("../models/HomeModel");

// //Para criar dados
// HomeModel.create({
//   titulo: "Outra coisa no banco de dados",
//   descricao: "Outra descrição no banco de dados",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

// // Para buscar dados
// HomeModel.find()
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
