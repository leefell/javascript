const express = require("express");
const app = express();

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

// app.operacao("rota", (requisicao, resposta) => {
//     ...
// })

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário.");
});

app.get("/contato", (req, res) => {
  res.send("Chama no ZAP");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor escutando na porta 3000");
});
