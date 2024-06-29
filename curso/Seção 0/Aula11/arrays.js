// Inicializando o array de amigos com três elementos
const amigos = ['Gabriel', 'Marcelo', 'Rafael'];
console.log('Array inicial:', amigos);

// Adicionando um novo elemento na quarta posição do array
amigos[3] = 'Guigui';
console.log('Depois de adicionar Guigui na posição 3:', amigos);

// Exibindo o tamanho atual do array
console.log('Tamanho atual do array:', amigos.length, 'elementos');

// Adicionando novos elementos ao final do array
amigos[amigos.length] = 'Alexandre';
amigos[amigos.length] = 'Josué';
amigos[amigos.length] = 'Ravi';
amigos[amigos.length] = 'Bizo';
console.log('Depois de adicionar Alexandre, Josué, Ravi e Bizo:', amigos);

// Adicionando um elemento usando o método push
amigos.push('Yudi');
console.log('Depois de adicionar Yudi com push:', amigos);

// Adicionando um elemento no começo do array usando o método unshift
amigos.unshift('Xaropin');
console.log('Depois de adicionar Xaropin no começo:', amigos);

// Removendo o último elemento do array usando o método pop
amigos.pop();
console.log('Depois de remover o último elemento (Yudi):', amigos);

// Removendo o primeiro elemento do array usando o método shift
amigos.shift();
console.log('Depois de remover o primeiro elemento (Xaropin):', amigos);

// Deletando um elemento específico do array (o índice fica vazio)
delete amigos[1];
console.log('Depois de deletar o elemento na posição 1:', amigos);

// Separando o array (criando um novo array com os primeiros 3 elementos)
const primeirosTresAmigos = amigos.slice(0, 3);
console.log('Primeiros três elementos do array:', primeirosTresAmigos);

// Criando um novo array excluindo os dois últimos elementos
const semOsDoisUltimos = amigos.slice(0, -2);
console.log('Array sem os dois últimos elementos:', semOsDoisUltimos);

// Verificando o tipo do array
console.log('Tipo do array amigos:', typeof amigos);

// Verificando se amigos é uma instância de Array
console.log('amigos é uma instância de Array?', amigos instanceof Array);


// Pode alterar valores internos de um array
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [1024, 2, 3, 4]

// Não pode reatribuir a variável
const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Erro: Assignment to constant variable.
