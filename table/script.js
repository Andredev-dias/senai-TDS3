function adicionarItem() {
  // Obter os valores dos campos de entrada
  var nome = document.getElementById("nome").value;
  var valor = document.getElementById("valor").value;
  var quantidade = document.getElementById("quantidade").value;

  // Validar se os campos estão preenchidos
  if (!nome || !valor || !quantidade) {
    alert("Preencha todos os campos.");
    return;
  }

  // Criar uma linha na tabela
  var tabela = document
    .getElementById("tabela")
    .getElementsByTagName("tbody")[0];
  var novaLinha = tabela.insertRow(tabela.rows.length);
  var celulaNome = novaLinha.insertCell(0);
  var celulaValor = novaLinha.insertCell(1);
  var celulaQuantidade = novaLinha.insertCell(2);

  // Preencher as células com os valores
  celulaNome.innerHTML = nome;
  celulaValor.innerHTML = valor;
  celulaQuantidade.innerHTML = quantidade;

  // Limpar os campos de entrada
  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("quantidade").value = "";

  // Salvar os dados no localStorage
  var dados = JSON.parse(localStorage.getItem("dados")) || [];
  var novoItem = { nome: nome, valor: valor, quantidade: quantidade };
  dados.push(novoItem);
  localStorage.setItem("dados", JSON.stringify(dados));
}

window.onload = function () {
  var dadosSalvos = JSON.parse(localStorage.getItem("dados")) || [];
  var tabela = document
    .getElementById("tabela")
    .getElementsByTagName("tbody")[0];

  // Preencher a tabela com os dados salvos
  dadosSalvos.forEach(function (item) {
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);

    celulaNome.innerHTML = item.nome;
    celulaValor.innerHTML = item.valor;
    celulaQuantidade.innerHTML = item.quantidade;
  });
};

function removerItem() {
  var nomeParaRemover = document.getElementById("nomeRemover").value;
  if (!nomeParaRemover) {
    alert("Digite um nome para remover.");
    return;
  }

  var tabela = document
    .getElementById("tabela")
    .getElementsByTagName("tbody")[0];
  var linhas = tabela.getElementsByTagName("tr");

  // percorrer sobre todas as linhas da tabela
  for (var i = 0; i < linhas.length; i++) {
    // Obtendo a primeira célula (td) da linha atual
    var celulaNome = linhas[i].getElementsByTagName("td")[0];

    // Verificando se a célulaNome existe e se o conteúdo é igual ao nome a ser removido
    if (celulaNome && celulaNome.innerHTML === nomeParaRemover) {
      // Removendo a linha da tabela
      tabela.deleteRow(i);

      // Removendo o item correspondente do localStorage (se necessário)
      var dados = JSON.parse(localStorage.getItem("dados")) || [];

      // Filtrando os dados para criar um novo array sem o item a ser removido
      // A função de callback verifica se a propriedade nome do elemento é diferente de nomeParaRemover.
      // Se a condição for verdadeira, o elemento é mantido no novo array;
      // se for falsa, o elemento é excluído.
      dados = dados.filter((item) => item.nome !== nomeParaRemover);

      // Atualizando o localStorage com os dados filtrados
      localStorage.setItem("dados", JSON.stringify(dados));

      // Retornando após a remoção para interromper a iteração
      return;
    }
  }

  alert("Nome não encontrado na tabela.");
}
