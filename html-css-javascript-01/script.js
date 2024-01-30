// alert("ola mundo!!!");

function somar() {
  var num1 = document.getElementById("num1").valueAsNumber;
  var num2 = document.getElementById("num2").valueAsNumber;
  if (!isNaN(num1) && !isNaN(num2)) {
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
    show();
  } else {
    alert("Por favor, insira números válidos.");
  }
}

function show() {
  var divResultado = document.getElementById("show-div");
  divResultado.style.display = "block";
  divResultado.style.background = "green";
}

function limpar() {
  window.location.reload();
}

// function somar() {
//   // Obtendo os valores dos campos de input
//   var num1 = parseFloat(document.getElementById('num1').value);
//   var num2 = parseFloat(document.getElementById('num2').value);

//   // Verificando se os valores são números válidos
//   if (!isNaN(num1) && !isNaN(num2)) {
//       // Realizando a soma
//       var resultado = num1 + num2;

//       // Exibindo o resultado na página
//       document.getElementById('resultado').textContent = resultado;
//   } else {
//       alert('Por favor, insira números válidos.');
//   }
// }
