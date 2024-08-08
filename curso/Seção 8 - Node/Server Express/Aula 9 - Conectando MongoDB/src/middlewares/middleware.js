exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    // Interceptando e alterando valor
    req.body.cliente = req.body.cliente.replace(
      "Augusto",
      "Você NÃO CHAMA AUGUSTO!"
    );
    console.log();
    console.log("Passei no middleware global");
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }

  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log("Olá sou seu outro middleware!");
  next();
};
