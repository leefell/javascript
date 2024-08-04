// Importa os módulos 'fs' e 'path' do Node.js. 'fs.promises' permite o uso de promessas com operações de sistema de arquivos.
const fs = require("fs").promises;
const path = require("path");

// Função assíncrona para ler o diretório raiz.
async function readDir(rootDir) {
  // Se rootDir não for fornecido, usa o diretório atual do script
  rootDir = rootDir || path.resolve(__dirname);

  // Lê o conteúdo do diretório raiz
  const files = await fs.readdir(rootDir);

  // Chama a função para percorrer e processar os arquivos
  walkFiles(files, rootDir);
}

// Função assíncrona para percorrer os arquivos e diretórios.
async function walkFiles(files, rootDir) {
  // Itera sobre cada arquivo/diretório na lista de arquivos
  for (let file of files) {
    // Resolve o caminho completo do arquivo/diretório
    const fileFullPath = path.resolve(rootDir, file);
    // Obtém as estatísticas do arquivo/diretório (como tamanho, tipo, etc.)
    const stats = await fs.stat(fileFullPath);

    // Ignora diretórios ou arquivos que contém '.git' no caminho
    if (/\.git/g.test(fileFullPath)) continue;

    // Ignora diretórios ou arquivos que contém 'node_modules' no caminho
    if (/node_modules/g.test(fileFullPath)) continue;

    // Se o item for um diretório, chama readDir recursivamente para processar seu conteúdo
    if (stats.isDirectory()) {
      readDir(fileFullPath);
      continue;
    }

    // Se o item não for um arquivo .css ou .html, ignora-o
    if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath))
      continue;

    // Imprime o caminho completo dos arquivos .css e .html encontrados
    console.log(fileFullPath);
  }
}

// Inicia a leitura do diretório especificado, que neste caso é um diretório local específico no sistema do usuário.
readDir("C:/Users/user/Documents/GitHub/javascript/curso");
