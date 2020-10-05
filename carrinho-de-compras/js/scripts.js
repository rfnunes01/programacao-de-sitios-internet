//Arquivo de scripts Carrinho de Compras

/**
 * Variavel Global
 */
var carrinhoItems = [];

/* Função para criar a tabela */
function CriaTabela(itens) {

    //console.log(itens);

    /**
     * Declaração da variável
     */
    var tabela = '';

    /**
     * Montando o header do tabela
     */
    tabela += '<thead>';
    tabela += '<tr>';
    tabela += '<th scope="col">Descrição</th>';
    tabela += '<th scope="col">Quantidade</th>';
    tabela += '<th scope="col">Preço</th>';
    tabela += '</tr>';
    tabela += '</thead>';

    /**
     * Montando o body da table e listando os itens
     */
    for (var key in itens) {
        tabela += `<tr><td>${itens[key].descricao}</td><td>${parseInt(itens[key].qtde)}</td><td>${formatarPreco(itens[key].preco)}</td></tr>`;
    }
    tabela += '</tbody>'

    /*
    * Passando a tabela montada para o HTML
    */
    document.getElementById('tabItens').innerHTML = tabela;

    /**
     * Somando os itens do carrinho
     */
    valorTotal(itens);

    /**
     * Limpando os campos do formulário
     */
    document.getElementById('inpDescr').value = "";
    document.getElementById('inpQtde').value  = "";
    document.getElementById('inpPreco').value = "";

    /**
     * Setando o foco para o campo descrição do formulário
     */
    document.getElementById('inpDescr').focus();
}

/* Função para somar todos os itens do carrinho */
function valorTotal(itens) {

    /**
     * Declarando a variável
     */
    var vTotal = 0;

    /**
     * Pegando os itens recebidos, passando um a um no laço de repetição (for) e fazendo a soma total
     */
    for (var key in itens) {
        vTotal += itens[key].preco * itens[key].qtde
    }

    //console.log(vTotal);

    /**
     * Injetando o valor total dos itens no HTML
     */
    document.getElementById('vTotal').innerHTML = 'Total: ' + formatarPreco(vTotal);
}


/* Função para adicionar os itens no carrinho */
function adicionarItem() {

    /**
     * Validado o formulário
     */
    if(!validar()){
		return;
	}

    /**
     * Pegando o valor digitado pelo usuário
     */
    var descricao = document.getElementById('inpDescr').value;
    var qtde = document.getElementById('inpQtde').value;
    var preco = document.getElementById('inpPreco').value;

    /**
     * Adicionando os itens no começo da lista
     */
    carrinhoItems.unshift({
        "descricao": descricao,
        "qtde": qtde,
        "preco": preco
    });

    //console.log(carrinhoItems);

    /**
     * Passanso os itens digitados para criar a tabela 
     */
    CriaTabela(carrinhoItems);

}

/* Função para formtar o preço digitado pelo usuário */
function formatarPreco(preco) {
    /**
     * Converte a string recebida em número real (float) e adiciona duas
     * casas após o (.) ponto.
     */
    var n = parseFloat(preco).toFixed(2) + "";

    //console.log(n)

    /**
     * Trocando o (.) ponto pela (,) vírgula
     */
    n = n.replace(".", ",");

    n = "R$ " + n;
    return n;
}

/* Função para validar o formulário */
function validar() {

    /**
     * Declarando as variáveis
     * Pegando o valor digitado pelo usuário
     */
    var descricao = document.getElementById('inpDescr');
    var qtde = document.getElementById('inpQtde');
    var preco = document.getElementById('inpPreco');
    var msg = document.getElementById('msg');
    var erros = "";

    /**
     * fazendo a validação dos campos
     * se for vazio retorna o erro e seta na variável erro
     * e ponha o foco do cursor no campo com o erro
     */
    if(descricao.value === "") {
        erros += 'Preencha a descrição!';
        descricao.focus();
    }
    
    else if (qtde.value === "") {
        erros += 'Preencha a quantidade!';
        qtde.focus();
    }
    
    else if(preco.value === "") {
        erros += 'Preencha o preço!';
        preco.focus();
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
    if(erros != ""){
        msg.innerHTML = erros;
        msg.classList.remove('d-none');
		return 0;
	}else{
        msg.classList.add('d-none');
		return 1;
	}

}