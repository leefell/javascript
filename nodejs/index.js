const express = require("express");

const server = express();
server.use(express.json());

// Query params = ?nome=alex
// Route params = /curso/2
// Request body = {nome: 'aa', tipo: 'alguma coisa'}

const cursos = ["Java", "Js", "react"];

// Middleware Global
server.use((req, res, next) => {
  console.log(`URL chamada: ${req.url}`);

  return next(); // passa pelo middleware e nao trava nele
});

// Esse é um middleware especifico que verifica se o nome do curso foi enviado
function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso é obrigatório" });
  }

  return next(); // se passar no if, o fluxo continua normalmente
}

function checkIndexCurso(req, res, next) {
  const index = req.params.index;
  if (!cursos[index]) {
    return res.status(400).json({ error: "O curso não existe" });
  }

  return next();
}

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

server.get("/curso/:index", checkIndexCurso, (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

// Usando o middleware na requisicao
// localhost/cursos -> checkCurso -> postaCursoNovo
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);
  return res.json(cursos);
});

server.put("/cursos/:index", checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos);
});

server.delete("/cursos/:index", checkIndexCurso, (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json(cursos);
});
server.listen(3000);
