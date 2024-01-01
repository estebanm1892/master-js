"use strict";

/**
 * 1. Un programa que pida 6 numeros por pantalla y los meta en un array
 * 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * 3. Ordenarlo y Mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario y que nos diga si esta en el array junto con su posición
 */

function mostrarArray(elementos, textoCustom = "") {
  document.write("<h1>Ordenados" + textoCustom + "</h1>");
  document.write("<ul>");
  elementos.forEach((elemento, i) => {
    document.write("<li>" + elemento + "</li> </br>");
  });
  document.write("<ul>");
}

// 1. Programa
var numeros = new Array(6);

for (let i = 0; i <= 5; i++) {
  numeros[i] = parseInt(prompt("introduce un número", 0));
}

// 2. Mostrar en el cuerpo de la pagina
numeros.forEach((numero, i) => {
  document.write("<strong>" + numero + "</strong> </br>");
});

// 2. Mostrar en consola
console.log(numeros);

// 3. Ordenar y Mostrar
numeros.sort(function (a, b) {
  return a - b;
});
mostrarArray(numeros);

// 4. Invertir el orden
numeros.reverse();
mostrarArray(numeros, " Reversivo");

// 5. Mostrar número de elementos en el array
document.write(
  "<h1>" + "Total de elementos en el array " + numeros.length + "</h1>"
);

// 6. Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex((numero) => numero == busqueda);
if (posicion == undefined) {
  document.write("No encontrado");
} else {
    document.write("<h1>Posición de la busqueda " + posicion + "</h1>");
}

// var bus = parseInt(prompt("Número que desea buscar: ", 0));

// var busqueda = numeros.findIndex((numero) => numero == bus);

// if (busqueda == undefined) {
//   document.write("<h2>El número " + bus + " no se encuentra en el array</h2>");
// } else {
//   document.write(
//     "<h2>El número " +
//       bus +
//       " se encuentra en el array y su posición es " +
//       busqueda +
//       "</h2>"
//   );
// }
