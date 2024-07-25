function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Resolve -> Sucesso
// Reject -> Deu erro
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad value.");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// then é pra Resolve | catch é pra Reject
esperaAi("Conectando com o Banco de Dados", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados do Banco de dados");
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(222222, rand(1, 3)); // aqui vai disparar o reject e o código abaixo é interrompido
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibe os dados na tela");
  })
  .catch((e) => {
    console.log("Erro", e);
  });

// CallBacks
// function esperaAi(msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg);
//     if (cb) cb();
//   }, tempo);
// }

// Com callbacks fica assim
// esperaAi("Frase 1", rand(1, 3), function () {
//   esperaAi("Frase 2", rand(1, 3), function () {
//     esperaAi("Frase 3", rand(1, 3), function () {
//       esperaAi("Frase 4", rand(1, 3));
//     });
//   });
// });
