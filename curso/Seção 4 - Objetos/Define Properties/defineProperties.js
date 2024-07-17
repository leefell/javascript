// Utilização de defineProperty e defineProperties para maior controle sobre as propriedades

function Produtos(nome, preco, estoque) {
  // Definindo a propriedade 'estoque' com controle detalhado
  Object.defineProperty(this, "estoque", {
    enumerable: true, // A chave 'estoque' será mostrada ao enumerar o objeto
    value: estoque, // O valor da chave 'estoque'
    writable: true, // O valor da chave 'estoque' pode ser alterado
    configurable: false, // A chave 'estoque' não pode ser reconfigurada ou deletada
  });

  // Definindo múltiplas propriedades com controle detalhado
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // A chave 'nome' será mostrada ao enumerar o objeto
      value: nome, // O valor da chave 'nome'
      writable: false, // O valor da chave 'nome' não pode ser alterado
      configurable: false, // A chave 'nome' não pode ser reconfigurada ou deletada
    },
    preco: {
      enumerable: true, // A chave 'preco' será mostrada ao enumerar o objeto
      value: preco, // O valor da chave 'preco'
      writable: true, // O valor da chave 'preco' pode ser alterado
      configurable: false, // A chave 'preco' não pode ser reconfigurada ou deletada
    },
  });
}

const p1 = new Produtos("Camiseta", 10, 3);

// Tentando alterar o valor de 'estoque' (permitido porque writable é true)
p1.estoque = 10000;

// Tentando deletar a chave 'estoque' (não permitido porque configurable é false)
delete p1.estoque;

// Imprimindo o objeto 'p1'
console.log(p1); // Output: Produtos { nome: 'Camiseta', preco: 10, estoque: 10000 }
