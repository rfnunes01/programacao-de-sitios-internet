function menssagem(classe, menssagem) {
    var msg = document.getElementById('msg');
    msg.classList.add(classe);
    msg.innerHTML = menssagem;
}

function calcularIMC(){
    var massa = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    
    var quadrado = (altura * altura);
    
    var calculo = (massa/quadrado);
    
    if(calculo <  17){
        menssagem('alert-secondary', 'Muito abaixo do peso, índice de: ' + calculo);
    }
    else if(calculo >= 17 && calculo <= 18.49){
        menssagem('alert-primary', 'Abaixo do peso, índice de: ' + calculo);
    }
    
    else if(calculo >=18.50 && calculo <= 24.99) {
        menssagem('alert-success', 'Peso normal, índice de: ' + calculo);
    }
    else if(calculo >=25 && calculo <= 29.99) {
        menssagem('alert-info', 'Acima do peso, índice de: ' + calculo);
    }
    else if(calculo >=30 && calculo <= 34.99) {
        menssagem('alert-warning', 'Obesidade I, índice de: ' + calculo);
    }
    else if(calculo >=35 && calculo <= 36.99) {
        menssagem('alert-orange', 'Obesidade II (severa), índice de: ' + calculo);
    }
    else if (calculo>40) {
        menssagem('alert-danger', 'Obesidade III (mórbida), índice de: ' + calculo);
    }
}


function limpar() {
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    menssagem('alert-light', '');
}