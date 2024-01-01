"use strict";

/**
 * Programa que pida dos números y que nos diga cual es mayor, cual es menor y si son iguales
 * PLUS: Si los números no son un número o son menores o iguales a cero, volver a pedir los números
 */

var numero1 = parseInt(prompt("introduce el primer número", 0));
var numero2 = parseInt(prompt("introduce el segundo número", 0));

console.log(numero1, numero2);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("introduce el primer número", 0));
  numero2 = parseInt(prompt("introduce el segundo número", 0));
}

if (numero1 > numero2) {
  alert("el número 1: " + numero1 + " es mayor que el número 2: " + numero2);
} else if (numero2 > numero1) {
  alert("el número 2: " + numero2 + " es mayor que el número 1: " + numero1);
} else if (numero1 == numero2) {
  alert("ambos números son iguales");
}
// else {
//   alert("introduce los números correctamente");
// }
