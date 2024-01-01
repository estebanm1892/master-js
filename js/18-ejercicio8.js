"use strict";

/**
 * Calculadora:
 * - Pide dos números en pantalla
 * - Si los números no se insertan bien, se volveran a pedir
 * - En el cuerpo de la pagina, en una alerta y por la consola mostrar el resultado de sumar, restar, multiplicar y dividir esas dos cifras
 */

var num1 = parseInt(prompt("igresa el número 1", 0));
var num2 = parseInt(prompt("igresa el número 2", 0));

while (isNaN(num1) || isNaN(num2)) {
  var num1 = parseInt(prompt("igresa el número 1", 0));
  var num2 = parseInt(prompt("igresa el número 2", 0));
}

var resul =
  "La suma es " +
  (num1 + num2) +
  " <br/>" +
  "La resta es " +
  (num1 - num2) +
  " <br/>" +
  "La multiplicación es " +
  num1 * num2 +
  " <br/>" +
  "La división es " +
  num1 / num2;

var resultado =
  "La suma es " +
  (num1 + num2) +
  " \n" +
  "La resta es " +
  (num1 - num2) +
  " \n" +
  "La multiplicación es " +
  num1 * num2 +
  " \n" +
  "La división es " +
  num1 / num2;

document.write(resul);
alert(resultado);
console.log(resultado);
