"use strict";

/**
 * Mostrar todos los divisores de un número introducido en un promt
 */

var num = parseInt(prompt("ingresa el número", 1));

for (let i = 0; i < num; i++) {
  if (num % i == 0) {
    console.log("Divisor " + i);
  }
}
