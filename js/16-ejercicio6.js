"use strict";

/*
 *si un número es par o impar
 1.ventana prompt
 2.si no es valido que nos pida de nuevo el numero 
 */

var num = parseInt(prompt("Introduce un número", 0));

while (isNaN(num)) {
  var num = parseInt(prompt("Introduce un número", 0));
}

if (num % 2 == 0) {
  alert("Es un número par");
} else {
  alert("Es impar");
}
