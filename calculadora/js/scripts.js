//Arquivo de scripts calculadora

/* Declaração da função calcular */
function calcular() { 

    /**
     * Declaração de variáveis
     */
    var n1        = parseFloat(document.getElementById('n1').value);  
    var n2        = parseFloat(document.getElementById('n2').value);  
    var resultado = 0;

    /* Verifica se adição esta seleciona e faz o cálculo */
   if (document.getElementsByName('operacao')[0].checked) {  
       resultado = n1 + n2;
   } 
   
   /* Verifica se subtração esta seleciona e faz o cálculo */
   if (document.getElementsByName('operacao')[1].checked) {  
       resultado = n1 - n2;  
   }

   /* Verifica se multiplicação esta seleciona e faz o cálculo */
   if (document.getElementsByName('operacao')[2].checked) {  
       resultado = n1 * n2;  
   }

   /* Verifica se divisão esta seleciona e faz o cálculo */
   if (document.getElementsByName('operacao')[3].checked) {  
       resultado = n1 / n2;  
   }
   
   /* retorna o resultado da operação */
   return (
       document.getElementById('resultado').innerHTML = resultado  
   );
    
}

/* Declaração da função limpar */
function limpar() {
    /**
     * Declaração de variáveis
     */
    var n1        = document.getElementById('n1');
    var n2        = document.getElementById('n2');
    var resultado = document.getElementById('resultado')

    /**
     * Limpando os campos
     */
    n1.value = 0;
    n2.value = 0;
    resultado.innerHTML = 0;

    /**
     * Move o cursor para o campo número 1
     */
    n1.focus();

}