/**
 * Scripts Desafio 01 - Projeto calculadora
 * Por richael Fernnado Nunes
 * Curnando Sistemas para internet | FATEC - Lins
 * Desafio feito pelo Prof. Dr. Moares
 * Matéria: Programacao de Sitios Internet
 */

/* Declaração de variáves globais */
var display = document.getElementById('calculator-screen');
var lastChar;

//Função para limpar o display da calculadora
function limpaDisplay() {
    display.value = 0;
}

// Função para voltar um valor
function back(){

    /**
     * Recebe o valor atual do display da calculadora
     */
    let valor = display.value;

    /**
     * Atribui o valor ao display da calculadora sem o ultimo caractere
     */
    display.value = valor.substring(0, valor.length-1);
}

// Função para pegar o valor de cada botão
function inputValue(numero) {

    /**
     * Se o valor inicial for zero, remove o zero
     */
    if(display.value === '0') {
        display.value = ""
    }

    /**
     * Validações de entrada das operações
     * Se o usuário digitar o mesmo operador mais de uma vez
     * ou se o usuário digitar um operador e depois outro operador
     * retiramos o operador anterior e adicionando o operador solicitado
     */

    /**
     * Validações do operador adição
     */
    if(lastChar === '+' && numero === '+'){
        back();
    }

    if(lastChar === '+' && numero === '-'){
        let x = display.value;
        display.value = x;
        back();
    }
    
    if(lastChar === '+' && numero === '*'){
        let x = display.value;
        display.value = x;
        back();
    }

    if(lastChar === '+' && numero === '/'){
        let x = display.value;
        display.value = x;
        back();
    }

    /**
     * Validações do operador subtração
     */
    if(lastChar === '-' && numero === '+'){
        let x = display.value;
        display.value = x;
        back();
    }

    if(lastChar === '-' && numero === '-'){
        back();
    }
    
    if(lastChar === '-' && numero === '*'){
        let x = display.value;
        display.value = x;
        back();
    }

    if(lastChar === '-' && numero === '/'){
        let x = display.value;
        display.value = x;
        back();
    }

    /**
     * Validações do operador multiplicação
     */
    if(lastChar === '*' && numero === '+'){
        let x = display.value;
        display.value = x;
        back();
    }
    
    if(lastChar === '*' && numero === '-'){
        let x = display.value;
        display.value = x;
        back();
    }

    if(lastChar === '*' && numero === '*'){
        back();
    }

    if(lastChar === '*' && numero === '/'){
        let x = display.value;
        display.value = x;
        back();
    }

    /**
     * Validações do operador divisão
     */
    if(lastChar === '/' && numero === '+'){
        let x = display.value;
        display.value = x;
        back();
    }
    
    if(lastChar === '/' && numero === '-'){
        let x = display.value;
        display.value = x;
        back();
    }
    
    if(lastChar === '/' && numero === '*'){
        let x = display.value;
        display.value = x;
        back();
    }

    if(lastChar === '/' && numero === '/'){
        back();
    }

    /**
     * O display da calculadora recebe ele mesmo
     * e concatena com o valor recebido(numero)
     */
    display.value = display.value + numero;

    /**
     * Declaração da variável do bloco
     */
    let lengthDisplay = 0;

    /**
     * Recebe a quantidade de caracteres do display da calculadora
     * e subtrai com 1
     */
    lengthDisplay = display.value.length - 1;

    /**
     * Recebe o ultimo caractere do display da calculadora
     */
    lastChar = display.value.substr(lengthDisplay);
}

// Função para fazer o cálculo
function calcular() {
    /**
     * Recebe o valor do display da calculadora
     */
    let valor = display.value;

    /**
     * Verifica se valor é verdadeiro
     */
    if(valor) {
        /**
         * display recebe o valor 
         * eval() - nesse caso vamos pegar o conteudo da string e
         * efetuar cáculos matemáticos
         */
        display.value = eval(valor);
    }
}