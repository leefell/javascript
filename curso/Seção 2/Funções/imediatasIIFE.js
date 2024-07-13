// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
    // Essa é a maneira de chamar uma função imediata.
    const sobrenome = 'Augusto';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Alexandre'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

(function(){
    
})();