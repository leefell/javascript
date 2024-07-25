// Essa é uma função que faz uma requisição
const request = (obj) => {
  // Cria um novo objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Configura a requisição com o método e a URL especificados
  xhr.open(obj.method, obj.url, true);

  // Envia a requisição
  xhr.send();

  // Adiciona um listener para o evento "load", que é disparado quando a resposta é recebida
  xhr.addEventListener("load", () => {
    // Verifica se o status da resposta está entre 200 e 299 (sucesso)
    if (xhr.status >= 200 && xhr.status < 300) {
      // Chama a função de callback de sucesso, passando a resposta
      obj.success(xhr.responseText);
    } else {
      // Chama a função de callback de erro, passando o status do erro e o status da resposta
      obj.error(xhr.statusText, xhr.status);
    }
  });
};

// Adiciona um listener para o evento "click" no documento
document.addEventListener("click", (e) => {
  // Obtém o elemento que foi clicado
  const el = e.target;
  // Obtém a tag do elemento em letras minúsculas
  const tag = el.tagName.toLowerCase();

  // Verifica se a tag do elemento é "a" (link)
  if (tag === "a") {
    // Previne o comportamento padrão do link (navegação)
    e.preventDefault();
    // Chama a função carregaPagina, passando o elemento clicado
    carregaPagina(el);
  }
});

// Função que carrega a página a partir do link clicado
function carregaPagina(el) {
  // Obtém o valor do atributo "href" do elemento
  const href = el.getAttribute("href");

  // Configura o objeto para a requisição
  const objConfig = {
    method: "GET",
    url: href,
    success(response) {
      // Chama a função carregaResultado em caso de sucesso
      carregaResultado(response);
    },
    error(errorText) {
      // Loga o erro no console em caso de falha
      console.log(errorText);
    },
  };

  // Faz a requisição com a configuração especificada
  request(objConfig);
}

// Função que carrega o resultado da resposta no elemento com a classe "resultado"
function carregaResultado(response) {
  // Seleciona o elemento com a classe "resultado"
  const resultado = document.querySelector(".resultado");
  // Define o HTML interno do elemento como a resposta recebida
  resultado.innerHTML = response;
}
