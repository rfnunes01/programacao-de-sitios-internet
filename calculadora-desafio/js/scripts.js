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
     * Se o usuário inserir dois pontos(.)
     * retiramos um ponto(.)
     */
    if(lastChar === '.' && numero === '.'){
        back();
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
    try {
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
    } catch (error) {
        /**
         * Display recebe error
         */
        display.value = "error";

        /**
         * Injeta o erro recebido do catch
         */
        document.getElementById("error-description").innerText = error.message;
        /**
         * Clica em um botão do tipo hidden para mostrar o modal
         */
        document.getElementById("btn-show-modal").click();
    } 
}

//Função para capturar os eventos do teclado
function keyPressed(evt){
    evt = evt || window.event;
    //var key = evt.keyCode || evt.which;
    //var tecla = String.fromCharCode(key);
    var tecla = evt.key;

    //alert(tecla);

    /**
     * Instrução para controlar as operações condicionais
     */
    switch (tecla) {
        case '1':
            inputValue(tecla);
            break;
        
        case '2':
            inputValue(tecla);
            break;

        case '3':
            inputValue(tecla);
            break;

        case '4':
            inputValue(tecla);
            break;

        case '5':
            inputValue(tecla);
            break;

        case '6':
            inputValue(tecla);
            break;

        case '7':
            inputValue(tecla);
            break;

        case '8':
            inputValue(tecla);
            break;

        case '9':
            inputValue(tecla);
            break;

        case '0':
            inputValue(tecla);
            break;

        case '.':
            inputValue(tecla);
            break;

        case ',':
            inputValue('.');
            break;

        case '+':
            inputValue(tecla);
            break;

        case '-':
            inputValue(tecla);
            break;

        case '*':
            inputValue(tecla);
            break;

        case '/':
            inputValue(tecla);
            break;

        case 'Escape':
            limpaDisplay();
            break;

        case 'Enter':
            calcular();
            break;

        default:
            break;
    }

}

/**
 * Objeto do DOM para ficar observando quando
 * uma tecla é pressionada no teclado
 * O evento onkeydown ocorre quando o usuário está pressionando uma tecla (no teclado).
 */
document.body.onkeydown = keyPressed;