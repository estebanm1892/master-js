"use strict";

/**
 * Hacer un programa que muestre todos los números entre dos numeros introducitos por el usuario
 */

var num1 = parseInt(prompt("introduce el primer número", 0));
var num2 = parseInt(prompt("introduce el segundo número", 0));

document.write("<h2> de " + num1 + " a " + num2 + "estan estos numeros: </h2>");

for (let i = num1; i <= num2; i++) {
  document.write(i + "<br/>");
}
