document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

// function carregaPagina(el) {
//   const href = el.getAttribute("href");

//   fetch(href) // Carregando o link
//     .then((response) => {
//       if (response.status !== 200) throw new Error("Erro 404");
//       return response.text(); // convertendo a resposta em texto
//     })
//     .then((html) => {
//       carregaResultado(html);
//     })
//     .catch((e) => console.log(e));
// }

// Convertendo pra async e await
async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("Erro 404");

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// Exemplo de uso do fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Erro na requisição: " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Erro:", error);
//   });

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error("Erro na requisição: " + response.status);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Erro:", error);
//   }
// }

// fetchData();
