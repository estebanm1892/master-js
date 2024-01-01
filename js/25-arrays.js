"use strict";

// Arrays, arreglos, matrices...

var nombre = "Esteban Monroy";

var nombres = [
  "Esteban Monroy",
  "Carmen Garcia",
  "Otilia Garcia",
  "Yenkary Peralta",
];

var lenguajes = new Array("Js", "Php", "Java", "go");

// console.log(nombres.length);

// var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));

// if (elemento >= nombres.length) {
//   alert("introduce un numero menor que " + nombres.length);
// } else {
//   alert("el usuario seleccionado es: " + nombres[elemento]);
// }

document.write("<h1>Lenguajes de programación de 2018</h1>");

document.write("<ul>");
// for (let i = 0; i < lenguajes.length; i++) {
//   document.write("<li>" + lenguajes[i] + "</li>");
// }

// lenguajes.forEach((elemento, indice, arr) => {
//   console.log(arr);
//   document.write("<li>" + indice + "-" + elemento + "</li>");
// });

for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

// Busquedas
var precios = [10, 20, 30, 40];
// var busqueda = lenguajes.find((lenguaje) => lenguaje == "Js");
var busqueda = precios.some((precio) => precio > 39);

console.log(busqueda);
