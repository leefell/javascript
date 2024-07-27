// Inicializa um novo projeto Node.js com um arquivo package.json padrão.
`npm init -y`

// Instala Babel CLI, Babel preset-env e Babel core como dependências de produção.
`npm install @babel/cli @babel/preset-env @babel/core`

// Instala Babel CLI, Babel preset-env e Babel core como dependências de desenvolvimento.
`npm install --save-dev @babel/cli @babel/preset-env @babel/core`

// Para instalar uma versão específica de Babel CLI, preset-env e core como dependências de desenvolvimento.
// Substitua 'numeroVersao' pela versão desejada, por exemplo, '7.14.0'.
`npm install --save-dev @babel/cli@numeroVersao @babel/preset-env@numeroVersao @babel/core@numeroVersao`

// Utiliza Babel para transpilar o arquivo main.js para um arquivo chamado bundle.js,
// aplicando o preset-env para garantir compatibilidade com todos os navegadores.
`npx babel main.js -o bundle.js --presets=@babel/env`

// Executa o script de Babel definido no arquivo package.json.
// Você precisa adicionar este script manualmente ao seu package.json.
`npm run babel`
