// Arquivo de validação de fornulário

/* Declaração da função validar */
function validar() {

    /**
     * Declarando variáves
     */
    var nome          = document.getElementById('nome');
    var email         = document.getElementById('email');
    var senha         = document.getElementById('senha');
    var confirm_senha = document.getElementById('confirm_senha');
    var msg_erro      = document.getElementById('msg_erro');

    msg_erro.classList.add('d-none');

    /**
     * Validações
     */

     /* Verifica se o campo nome esta vazio */
    if(nome.value === "") {
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: Você deve informar o nome.";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        nome.focus();
        return false;
    }

    /* Verifica se o campo email esta vazio */
    if(email.value === "") {
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: Você deve informar um email.";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        email.focus();
        return false;
    }

    /* Verifica se o campo senha esta vazio */
    if(senha.value === "") {
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: Você deve informar uma senha.";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        senha.focus();
        return false;
    }

    /* Verifica se o campo comfirmação de senha esta vazio */
    if(confirm_senha.value === "") {
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: Você deve confirmar a senha.";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        confirm_senha.focus();
        return false;
    }

    if(senha.value.length < 6){
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: Informe uma senha com no mínimo 6 caracteres";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        senha.focus();
        return false;
    }

    if(confirm_senha.value.length < 6){
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: Informe uma senha com no mínimo 6 caracteres";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        confirm_senha.focus();
        return false;
    }

    if(confirm_senha.value !== senha.value) {
        //Atribui a menssagem de erro
        msg_erro.innerHTML = "Erro: As senhas são diferente.";
        //torna a menssagem de erro visivel
        msg_erro.classList.remove('d-none');
        //Coloca o cursor do mouse no campo
        confirm_senha.focus();
        return false;
    }


    return(
        msg_erro.innerHTML = "Sucesso: Validação completa.",
        msg_erro.classList.remove('d-none'),
        msg_erro.classList.remove('text-danger'),
        msg_erro.classList.add('text-success')
    );


}

function showHiddenpass() {
    var senha         = document.getElementById('senha');
    var confirm_senha = document.getElementById('confirm_senha');
    var button = document.getElementById('mostarSenha');

    if(senha.type === 'password' || confirm_senha.type === 'password') {
        senha.type = "text";
        confirm_senha.type = "text";
        button.innerText = "Ocultar senha"
    }else{
        senha.type = "password";
        confirm_senha.type = "password";
        button.innerText = "Mostrar senha"
    }

}