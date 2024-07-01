let pontuacaoUsuario = 999;

// if(pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário normal');
// }

// Ternário
pontuacaoUsuario >= 1000 ? console.log('VIP') : console.log('Normal');

pontuacaoUsuario = 1100;
pontuacaoUsuario >= 1000 ? console.log('VIP') : console.log('Normal');

// Fallback (valor padrão)

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao); 

// Output vai ser preto porque é a cor padrão
// uma vez que a corUsuario é nula.