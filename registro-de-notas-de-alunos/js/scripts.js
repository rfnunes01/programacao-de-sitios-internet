 // Arquivo de scripts Tabela de Notas e Médias

/**
 * Variavel Global
 */
var alunos = [];
var id     = document.getElementById('inpID');
var nome   = document.getElementById('inpNome');
var nota1  = document.getElementById('inpNota1');
var nota2  = document.getElementById('inpNota2');
var nota3  = document.getElementById('inpNota3');

/* Função para criar a tabela */
/**
 * Cria toda a estrutura da tabela
 * Recebe como parâmetro os alunos, no caso passo
 * a array de alunos
 */
function CriarTabela(aluno) {

    //console.log(aluno);

    /**
     * Declaração da variável
     */
    var criarTabela = '';

    /**
     * Montando o header do tabela
     */
    criarTabela += '<thead>';
    criarTabela += '<tr>';
    criarTabela += '<th style="width: 130px!important;">ID</th>';
    criarTabela += '<th style="width: 400px!important;">NOME</th>';
    criarTabela += '<th style="width: 130px!important;">NOTA 1</th>';
    criarTabela += '<th style="width: 130px!important;">NOTA 2</th>';
    criarTabela += '<th style="width: 130px!important;">NOTA 3</th>';
    criarTabela += '<th style="width: 130px!important;">MÉDIA</th>';
    criarTabela += '<th style="width: 200px!important;">STATUS</th>';
    criarTabela += '</tr>';
    criarTabela += '</thead>';

    /**
     * Montando o body da tabela
     * Para cada item dentro da array de aluno, imprima o nome da
     * chave key dentro  de aluno
     */
    for (var key in aluno) {
        criarTabela += `<tr>
            <td>${aluno[key].id}</td>
            <td>${aluno[key].nome}</td>
            <td>${FormatarNota(aluno[key].notas[0])}</td>
            <td>${FormatarNota(aluno[key].notas[1])}</td>
            <td>${FormatarNota(aluno[key].notas[2])}</td>
            <td>${CalcularMedia(aluno[key].notas)}</td>
            <td>${Situacao(aluno[key].notas)}</td>
        </tr>`;
    }
    criarTabela += '</tbody>';

    /*
    * Passando a tabela montada para o HTML
    */
    document.getElementById('message-null').innerHTML = "";
    document.getElementById('tabNotas').innerHTML = criarTabela;

    /**
     * Gerando um novo ID para a nota
     */
    id.value = GeraID();

    /**
     * Limpando os campos do formulário
     */
    LimparCampos();

    /*Messagem de sucesso */
    Menssagem('alert-success', 'Nota cadastrada com sucesso!', true)

    /**
     * Move/Seta o cursor para o campo nome
     */
    nome.focus();
}

/* Função inserir notas na tabela */
/**
 * Nessa função, faço toda validação necessária para a
 * inserção de dados na tabela utilizando a função validar();
 * Gero um uma única identifição para cada registro na tabela
 * utilizando a função GeraID();
 * E por fim utilizo a função CriarTabela() para inserir os dados na table.
 */
function LancarNota() {

    /**
     * Validado o formulário
     */
    if (!Validar()) {
        return;
    }

    /**
     * Pegando o ID gerado na função
     */
    var nid = GeraID();

    /**
     * Inserindo os dados na array
     * Aqui decidi inserir uma array dentro de outra array para ficar
     * mais facil a manipulação das notas
     * Utilizando a função push para inserir os dados no final da tabela
     */
    alunos.push({
        id: nid,
        nome: nome.value,
        notas: [parseFloat(nota1.value), parseFloat(nota2.value), parseFloat(nota3.value)]
    });

    /**
     * Função para criar toda a estrutura da tabela
     */
    CriarTabela(alunos);

}

/* Função para gerar o ID de cada registro */
/**
 * Dava pra pegar o índice da array mas resolvi
 * fazer uma função
 */
function GeraID() {
    /**
     * Declaração da variável
     */
    var geraID = 0

    /**
     * Verifica se a array de alunos está vazia
     * se estiver vazia ele gera um ID inicial com o valor de 1
     * senão ele pega o ultimo id cadastrado na array e soma + 1
     */
    if (alunos.length === 0) {
        geraID = 1;
    } else {
        let lastID = alunos[alunos.length - 1].id
        geraID = lastID + 1
    }

    /**
     * Retorna o ID gerado
     */
    return geraID;
}

/* Função para fazer o cálculo da média */
function CalcularMedia(notas) {

    /**
     * Declaração da variável
     */
    var nota = 0;

    /**
     * Pegando os notas recebidos, passando no
     * laço de repetição e fazendo a soma das notas
     * Para cada item dentro da array de notas, imprima o nome da
     * chave key dentro  de notas
     */
    for (var key in notas) {
        nota += notas[key]
    }

    /**
     * Claculando a Média
     * Formatando as notas
     */
    var calcularMedia = FormatarNota(nota / 3);

    /**
     * Retornando a média calculada
     */
    return calcularMedia;
}


/* Função para verificar a situação do aluno */
/**
 * Recebe as notas como parâmetro
 * Chama a função CalcularMédia() passando como parâmetro
 * as notas recebidas retornando a média e em seguida
 * fazendo a vierificação se o aluno foi aprovado ou precisa
 * refazer o exame
 */
function Situacao(notas) {

    /**
     * Recebe o resultado da média
     */
    var media = CalcularMedia(notas);

    /**
     * Declaração de variável
     */
    var situacao = "";

    /**
     * Faz a verificação
     * se a média for maior ou igual a 5 retorna aprovado
     * senão retorna exame
     */
    if (media >= 5) {
        situacao = '<span class="badge badge-success">APROVADO</span>'
    } else {
        situacao = '<span class="badge badge-danger">EXAME</span>'
    }

    //console.log(situacao);

    /**
     * Retorna a situacao
     */
    return situacao;

}

/* Função para formatar a nota */
/**
 * Recebe as notas como parâmetro
 * E faz a substituição da vírgula pelo ponto 
 */
function FormatarNota(notas) {
    /**
     * Converte a string recebida em número real (float) e adiciona uma
     * casa após o (.) ponto.
     */
    var n = parseFloat(notas).toFixed(1) + "";

    //console.log(n)

    /**
     * Trocando o (,) ponto pela (.) vírgula
     */
    n = n.replace(",", ".");

    /**
     * Retorna a nota formatada
     */
    return n;
}

/* Função para validação do formuláro de entrada de dados */
function Validar() {

    //console.log(isNaN("sddfsf"));

    /**
     * Declaração da variável
     */
    var erros = "";

    /**
     * fazendo a validação dos campos
     * se for vazio retorna o erro e seta na variável erro
     * e ponha o foco do cursor no campo com o erro
     */
    if (nome.value === "") {
        erros += 'Preencha o nome do aluno!';
        nome.focus();
    }

    else if (nota1.value === "") {
        erros += 'Preencha a a primeira nota!';
        nota1.focus();
    }

    else if (nota2.value === "") {
        erros += 'Preencha a a segunda nota!';
        nota2.focus();
    }

    else if (nota3.value === "") {
        erros += 'Preencha a a terceira nota!';
        nota3.focus();
    }

    /**
     * Verificando se os valores recebidos
     * são menores ou iguais a zero ou se são maiores ou igual a dez
     * e também consequentemente se estão entre zero e dez
     */
    else if (nota1.value <= 0 || nota1.value > 10) {
        erros += 'A primeira nota deve ter o valor entre ou igual a 0 e 10!';
        nota1.focus();
    }

    else if (nota2.value < 0 || nota2.value > 10) {
        erros += 'A segunda nota deve ter o valor entre ou igual a 0 e 10!';
        nota2.focus();
    }

    else if (nota3.value < 0 || nota3.value > 10) {
        erros += 'A terceira nota deve ter o valor entre ou igual a 0 e 10!';
        nota3.focus();
    }

    /**
     * Verificando se os valores recebidos são
     * do tipo numemérico
     * A função isNaN(Não é um número) retorna true se o valor recebido for
     * alfanumérico(string) essa função é perfeita para validar a entrdada
     * de dodos das notas
     */
    else if (isNaN(nota1.value)) {
        erros += 'A primeira nota deve conter apenas números!';
        nota1.focus();
    }

    else if (isNaN(nota2.value)) {
        erros += 'A segunda nota deve conter apenas números!';
        nota2.focus();
    }

    else if (isNaN(nota3.value)) {
        erros += 'A terceira nota deve conter apenas números!';
        nota3.focus();
    }

    //console.log(erros);

    /**
     * Se a variável erro for diferente de vazio
     * Injeta o erro no alert(msg)
     * Remove a classe d-none(classe para esconder um elemento da tela)
     * e retorna 0(zero)
     * Caso contrário 
     * Adiciona a classe d-none(classe para esconder um elemento da tela)
     * e retorna 1
     */
    if (erros != "") {
        Menssagem('alert-danger', erros, true);
        return 0;
    } else {
        Menssagem('alert-light', '', false);
        return 1;
    }

}

/* Função para limpar os campos do formulário */
function LimparCampos() {
    Menssagem('alert-light', '', false);
    nome.value    = "";
    nota1.value   = "";
    nota2.value   = "";
    nota3.value   = "";
}

/* Função para resetar nossa tabela de notas */
function LimparNotas() {
    /**
     * Declaração da variável
     */
    var limparNotas = '';

    /**
     * Montando o header do tabela
     */
    limparNotas += '<thead>';
    limparNotas += '<tr>';
    limparNotas += '<th style="width: 130px!important;">ID</th>';
    limparNotas += '<th style="width: 400px!important;">NOME</th>';
    limparNotas += '<th style="width: 130px!important;">NOTA 1</th>';
    limparNotas += '<th style="width: 130px!important;">NOTA 2</th>';
    limparNotas += '<th style="width: 130px!important;">NOTA 3</th>';
    limparNotas += '<th style="width: 130px!important;">MÉDIA</th>';
    limparNotas += '<th style="width: 200px!important;">STATUS</th>';
    limparNotas += '</tr>';
    limparNotas += '</thead>';

    /**
     * Limpando os dados da array de alunos
     */
    alunos = [];

    /**
     * Voltando ao padrão inicial da nossa tabela de notas
     */
   document.getElementById('message-null').innerHTML = "NÃO FOI ENCONTADO REGISTROS";
   document.getElementById('tabNotas').innerHTML     = limparNotas;

   /**
    * Chamando a função de limpar campos para
    * garantir que não haverá dados em nenhum campo
    */
   LimparCampos();

}

/* Função para facilitar a inserção de messagens */
/**
 * parametros - classe e menssagem -> string
 * - mostrar - booleano
 */
function Menssagem(classe, menssagem, mostrar) {
    /**
     * Seta a div menssagem na variavel msg
     */
    var msg       = document.getElementById('msg');

    /**
     * Injeta a menssagem recebida no HTML
     */
    msg.innerHTML = menssagem;

    /**
     * Remove as classes atribuídas no elemento anteriormente
     */
    msg.classList.remove('alert-light');
    msg.classList.remove('alert-success');
    msg.classList.remove('alert-danger');

    /**
     * Adiciona a classe recebida no elemento
     */
    msg.classList.add(classe);

    /**
     * Se o valor recebido de mostrar for verdadeiro
     * ele remove a classe d-none e adiciona a classe
     * d-block no elemento
     * caso contrário remove a classe d-block e 
     * adiciona a class d-none no elemento
     */
    if(mostrar) {
       msg.classList.remove('d-none'); 
       msg.classList.add('d-block'); 
    } else {
        msg.classList.remove('d-block'); 
        msg.classList.add('d-none'); 
    }
    
}