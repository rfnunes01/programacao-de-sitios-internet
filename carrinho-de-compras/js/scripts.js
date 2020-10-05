//Arquivo de scripts Carrinho de Compras

/**
 * Variavel Global
 */
var carrinhoItems = [];

/**
 * Função para criar a tabela
 */
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
        tabela += `<tr><td>${itens[key].descricao}</td><td>${parseInt(itens[key].qtde)}</td><td>${itens[key].preco}</td></tr>`;
    }
    tabela += '</tbody>'

    /*
    * Passando a tabela montada para o HTML
    */
    document.getElementById('tabItens').innerHTML = tabela;
}


 /* Função para adicionar os itens no carrinho */
function adicionarItem() {

    /**
     * Pegando o valor digitado dos inputs
     */
    var descricao = document.getElementById('inpDescr').value;
    var qtde = document.getElementById('inpQtde').value;
    var preco = document.getElementById('inpPreco').value;

    /* Adicionando os itens no começo da lista */
    carrinhoItems.unshift({
        "descricao": descricao,
        "qtde": qtde,
        "preco": preco
    });

    /* Passanso os itens digitados para criar a tabela  */
    CriaTabela(carrinhoItems);

}