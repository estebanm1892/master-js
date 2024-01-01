"use strict";

/**
 * Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
 * hasta introducir un numero negativo y ahí mostrar el resultado
 */

var suma = 0;
var contador = 0;

// var num1 = parseInt(prompt('introduce el número 1', 0));
// var num2 = parseInt(prompt('introduce el número 2', 0));

do {
  var num = parseInt(prompt("numeros hasta insertar uno negativo", 0));

  if (isNaN(num)) {
    num = 0;
  } else if (num >= 0) {
    suma = suma + num;

    contador++;
  }

  console.log(suma);
  console.log(contador);
} while (num >= 0);

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador));
