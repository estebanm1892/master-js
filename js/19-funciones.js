"use strict";

// Funciones

/**
 * Conjunto de ordenes donde estan guardadas
 */

function porConsola(num1, num2) {
  console.log("Suma " + (num1 + num2));
  console.log("Resta " + (num1 - num2));
  console.log("Multiplicación " + num1 * num2);
  console.log("División " + num1 / num2);
}

function porPantalla(num1, num2) {
  document.write("Suma " + (num1 + num2) + "<br/>");
  document.write("Resta " + (num1 - num2) + "<br/>");
  document.write("Multiplicación " + num1 * num2 + "<br/>");
  document.write("División " + num1 / num2 + "<br/>");
}

function calculadora(num1, num2, mostrar = false) {
  if (mostrar == false) {
    porConsola(1, 3);
  } else {
    porPantalla(1, 3);
  }

  return true;
}

// Invocar o llamar la función
calculadora(1, 2, false);
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   calculadora(i, 8);
//   console.log("****");
// }
