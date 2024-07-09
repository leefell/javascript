// function soma(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new ReferenceError('x e y precisam ser números.')
//     }

//     return x + y;
// }

// try{
//     console.log(soma(1,4));
//     console.log(soma(1,'1'));
// }catch(error){
//     console.log('Erro!');
// }finally{
//     console.log('Fim do código!');
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const hora = retornaHora();
    console.log(hora);
}catch(err){
    console.log('Deu erro');
}finally{
    console.log('Consulta Completa!');
}