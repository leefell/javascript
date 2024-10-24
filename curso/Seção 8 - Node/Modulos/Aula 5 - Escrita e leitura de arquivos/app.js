const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

// const pessoas = [
//   { nome: "João" },
//   { nome: "Maria" },
//   { nome: "Alexandre" },
//   { nome: "Eduarda" },
// ];
// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}
leArquivo(caminhoArquivo);

function renderizaDados(dados) {
  console.log(dados);

  // Convertendo em um objeto JS novamente
  dados = JSON.parse(dados);
  dados.forEach((valor) => {
    console.log(valor.nome);
  });
}
