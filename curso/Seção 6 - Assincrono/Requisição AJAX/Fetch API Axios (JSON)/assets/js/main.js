// fetch("pessoas.json")
//   .then((response) => response.json()) // Isso retorna uma nova promise
//   .then((json) => carregaElementosNaPagina(json)); // aqui manda pra funcao

// Ordem de complexidade:
// XMLHttpRequest -> fetch -> Axios

// Usando o axios | 1 linha de código para fazer um GET
axios("pessoas.json").then((response) =>
  carregaElementosNaPagina(response.data)
);

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");
  for (let pessoa of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}
