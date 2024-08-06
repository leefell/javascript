const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  // a flag 'a' da um append no final do arquivo.
  // a flag 'w' serve para indicar a sobrescrita do arquivo
  fs.writeFile(caminho, dados, { flag: "w" });
};
