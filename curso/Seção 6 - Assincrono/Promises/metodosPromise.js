function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no reject");
        return;
      }
      resolve(msg.toUpperCase() + " Passei na promise");
    }, tempo);
  });
}

// const arrayPromises = [
//   //   "Primeiro valor",
//   esperaAi("Promise 1", rand(1, 5)),
//   esperaAi("Promise 2", rand(1, 5)),
//   esperaAi("Promise 3", rand(1, 5)),
//   esperaAi(1000, rand(1, 5)),
//   //   "Outro valor",
// ];

// Promise.all -> Tenta resolver todas as promises e
// Retorna um array com todas as promises completas
// Promise.all(arrayPromises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.race -> a primeira promise que resolver, será entregue
// Promise.race(arrayPromises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
    // return Promise.reject("Página em cache");
  }

  return esperaAi("Baixei a página", 3000);
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("Erro", e));
