const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    Idade do cliente: <input type="number" name="idade">
    <button>Enviar formulário</button>
    </form>
    `);
});

// Interrogação indica que o parametro é opcional
app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post("/", (req, res) => {
  console.log(req.body);
  // Nesse caso o nome do input do formulário é a chave
  res.send(`O que voce me enviou foi: ${req.body.nome}, ${req.body.idade}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor escutando na porta 3000");
});
