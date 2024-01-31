// alert("ola mundo!!!");

function somar() {
  var num1 = document.getElementById("num1").valueAsNumber;
  var num2 = document.getElementById("num2").valueAsNumber;
  if (!isNaN(num1) && !isNaN(num2)) {
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
    show(resultado);
    // if (resultado > 5) {
    //   show();
    // } else {
    //   var divVermelha = document.getElementById("show-div");
    //   divVermelha.style.display = "block";
    //   divVermelha.style.background = "red";
    // }
  } else {
    alert("Por favor, insira números válidos.");
  }
}

function show(resultado) {
  var divResultado = document.getElementById("show-div");
  // divResultado.textContent = "Resultado: " + resultado;
  if (resultado > 5) {
    divResultado.style.background = "green";
  } else {
    divResultado.style.background = "red";
  }

  divResultado.style.display = "block";
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
