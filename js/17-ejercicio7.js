"use strict";

/**
 * Tabla de multiplicar de un número introducido por pantalla
 */

var num = parseInt(prompt("introduce un número", 1));

for (let i = 1; i <= 10; i++) {
  var mult = num * i;

  console.log(num + " X " + i + " = " + mult);
}
