exports.middlewareGlobal = (req, res, next) => {
  // Como esse middleware é global, essa variavel local vai estar presente
  // em todo lugar o middleware estiver
  res.locals.umaVariavelLocal = "Este é o valor da variável local.";
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log("Olá sou seu outro middleware!");
  next();
};
