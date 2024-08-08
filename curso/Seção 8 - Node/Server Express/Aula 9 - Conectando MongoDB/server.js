require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto"); // app emitindo um sinal
  })
  .catch((e) => console.log(e));

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nesse momento todas as requisições de todas as rotas vão passar nesse middleware
app.use(middlewareGlobal);
app.use(routes);

// agora a conexão vai ocorrer apenas quando o app emitir um sinal de pronto, então o cliente
// não vai ouvir nada enquanto a conexão com o banco de dados for estabelecida
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor escutando na porta 3000");
  });
});
