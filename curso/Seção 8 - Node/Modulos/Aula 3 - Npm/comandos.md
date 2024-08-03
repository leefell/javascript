### Comandos do NPM

- `npm init -y`  
  Inicializa rapidamente um novo projeto com o `package.json` padrão.

- `npm i <modulo>`  
  Instala um módulo.

- `npm update`  
  Atualiza todos os pacotes para suas versões mais recentes.

- `npm i express --save-dev`  
  Move o módulo `express` para as dependências de desenvolvimento (`devDependencies`).

- `npm i express --save-prod`  
  Move o módulo `express` para as dependências (`dependencies`).

- `npm i express@2.1.0`  
  Instala uma versão específica do módulo `express` (por padrão, permite atualizações de `minor` e `patch`).

- `npm i express@2.1.0 -E`  
  Instala uma versão específica do módulo `express` sem permitir atualizações (`exact`).

### Versionamento Semântico

- **Versionamento**  
  As versões são representadas como `major.minor.patch`:

  - `major`: Versão principal
  - `minor`: Versão secundária
  - `patch`: Correção de bugs

- **`^` (Caret)**  
  Permite atualizações de `minor` e `patch` ao rodar `npm update`, mas não de `major`, para evitar quebra de compatibilidade.

- **`~` (Tilde)**  
  Permite atualizações apenas de `patch`.

- **Exemplo**  
  `npm i express@4.x`  
  Instala a versão mais recente de `minor` e `patch` dentro da versão `major` 4.

- **`npm uninstall <pacote>`**  
  Desinstala um pacote.

- **`npm ls`**  
  Lista todos os pacotes instalados.

- **`npm ls --depth=1`**  
  Mostra os pacotes instalados com profundidade de um nível (somente dependências diretas).
