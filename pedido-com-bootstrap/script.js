function comecar() {
  var nome = document.getElementById("exampleFormControlInput1").value;
  show(nome);
}

function show(nome) {
  document.getElementById("nomePrint").textContent = nome;
  var div = document.getElementById("selects-div");
  if (nome && nome.trim() !== "") {
    div.style.display = "block";
  } else {
    document.getElementById("error").style.display = "flex";
  }
}

function fechar() {
  document.getElementById("error").style.display = "none";
  document.getElementById("exampleFormControlInput1").style.background =
    "lightpink";
}

function calcularTotal() {
  var selectPratos = document.getElementById("selectPrato");
  var selectSobremesas = document.getElementById("selectSobremesa");
  var selectBebidas = document.getElementById("selectBebida");
  var resultadoSpan = document.getElementById("resultado");

  var total = 0;
  var prato = 0;
  var bebida = 0;
  var sobremesa = 0;

  // Adicione os valores correspondentes às opções selecionadas
  switch (selectPratos.value) {
    case "prato1":
      total += 10;
      prato = 10;
      break;
    case "prato2":
      total += 20;
      prato = 20;
      break;
    case "prato3":
      total += 30;
      prato = 30;
      break;
  }

  switch (selectBebidas.value) {
    case "refrigerante":
      total += 5;
      bebida = 5;
      break;
    case "agua":
      total += 3;
      bebida = 3;
      break;
    case "suco":
      total += 8;
      bebida = 8;
      break;
  }

  switch (selectSobremesas.value) {
    case "sorvete":
      total += 10;
      sobremesa = 10;
      break;
    case "chocolate":
      total += 5;
      sobremesa = 5;
      break;
    case "cafe":
      total += 2;
      sobremesa = 2;
      break;
  }

  document.getElementById("bebida-pronto").textContent =
    selectBebidas.value + " - R$" + bebida;
  document.getElementById("sobremesa-pronto").textContent =
    selectSobremesas.value + " - R$" + sobremesa;
  document.getElementById("prato-pronto").textContent =
    selectPratos.value + " - R$" + prato;
  document.getElementById("pedido-pronto").style.display = "flex";
  // Exiba o total no span
  resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function limpar() {
  document.getElementById("pedido-pronto").style.display = "none";
  document.getElementById("selects-div").style.display = "none";
  document.getElementById("exampleFormControlInput1").value = " ";
  document.getElementById("resultado").value = " ";
  document.getElementById("selectSobremesa").value = "selecione uma sobremesa";
  document.getElementById("selectBebida").value = "selecione uma bebida";
  document.getElementById("selectPrato").value = "selecione um prato";
}
