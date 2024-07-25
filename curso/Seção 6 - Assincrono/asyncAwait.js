function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no Erro");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na Promise");
      return;
    }, tempo);
  });
}

// esperaAi("Fase 1", rand())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 2", rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("Fase 3", rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase;
//   })
//   .then((fase) => {
//     console.log("Terminou na fase", fase);
//   })
//   .catch((e) => console.log(e));

// Usando async e await:

async function executa() {
  try {
    // Exemplo de promise pendente
    const fase1 = esperaAi("Fase 1", 1000);
    console.log(fase1);

    setTimeout(() => {
      console.log("Essa promise estava pendente", fase1);
    }, 1500);

    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);

    const fase4 = await esperaAi("Fase 4", rand());
    console.log(fase4);

    console.log("Terminamos na fase:", fase4);
  } catch (e) {
    console.log(e);
  }
}
executa();

// pending -> pendente
// fullfuiled -> resolvida
// reject -> falha