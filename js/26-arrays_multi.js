"use strict";

// Son arrays dentro de otro array

var categorias = ["acción", "terror", "comedia"];
var pelis = ["La verdad duele", "la vida es bella", "Gran torino"];

pelis.reverse()
console.log(pelis);

var cine = [categorias, pelis];

// console.log(cine[0][1]);

var elemento = "";

// do {
//   elemento = prompt("introduce tu pelicula: ");
//   pelis.push(elemento);
// } while (elemento != "ACABAR");
// pelis.pop();

var indice = pelis.indexOf("la vida es bella");
if (indice > -1) {
  pelis.splice(indice, 1);
}

var pelis_string = pelis.join();

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ");

console.log(cadena_array);

console.log(pelis_string);

console.log(pelis);
