const Cachorro = require("./Z/mod2");

const c1 = new Cachorro("Diana");
c1.latir();

console.log(__filename);
console.log(__dirname);

const path = require("path");
//           atual      volta volta entra em arq entra em img
path.resolve(__dirname, "..", "..", "arquivos", "imagens");
