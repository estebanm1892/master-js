"use strict";

/**
 * Mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario.
 */

var num1 = parseInt(prompt("introduce el primer número", 0));
var num2 = parseInt(prompt("introduce el segundo número", 0));

while (num1 < num2) {
  num1++;

  if (num1 % 2 != 0) {
    console.log("El " + num1 + " es impar");
  }
}
