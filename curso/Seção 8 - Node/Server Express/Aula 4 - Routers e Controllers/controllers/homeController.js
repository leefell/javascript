exports.paginaInicial = (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        Idade do cliente: <input type="number" name="idade">
        <button>Enviar formulário</button>
        </form>
        `);
};

exports.trataPost = (req, res) => {
  res.send("Olá! Sou uma rota de POST.");
};
