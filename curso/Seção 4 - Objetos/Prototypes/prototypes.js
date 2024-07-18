// Função construtora -> Molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // Método nomeCompleto definido diretamente na instância (não é ideal para métodos comuns a todas as instâncias)
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

// Propriedades e métodos definidos no prototype da função construtora
// __proto__ é o pai de todos os objetos, permitindo compartilhar métodos entre todas as instâncias
Pessoa.prototype.EsseMetodoTaDentroDoProto = "Estou dentro do __proto__.";

// Método nomeCompleto definido no prototype para ser compartilhado entre todas as instâncias
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// Quando houver a tentativa de acessar um membro de um objeto, o motor do JS primeiro tenta encontrá-lo
// no próprio objeto e depois na cadeia de protótipos (__proto__) até o topo (null).

// Criação de instâncias da função construtora Pessoa   
const pessoa1 = new Pessoa("Alexandre", "A."); // Pessoa = função construtora
const pessoa2 = new Pessoa("Gabriel", "A."); // Pessoa = função construtora

// Criação de uma instância do objeto Date para comparação
const data = new Date();

// Exibindo as instâncias e seus prototypes no console
console.dir(pessoa1);
console.dir(data);

// Acessando a propriedade EsseMetodoTaDentroDoProto através das instâncias
console.log(pessoa1.EsseMetodoTaDentroDoProto); // "Estou dentro do __proto__."
console.log(pessoa2.EsseMetodoTaDentroDoProto); // "Estou dentro do __proto__."

// Então todos os objetos possuem uma referência interna para __proto__.
// Isso melhora a performace do programa, imagine que existem mil instancias de Pessoa, cada um
// teria que ter seu this.nomeCompleto, mas se o nomeCompleto foi linkado no prototype, por
// padrão todas as instâncias usaram a referência do pai delas (__proto__) para esse método.
// Então quando um método faz a mesma coisa para todos os objetos, é melhor linkar ele no prototype.
