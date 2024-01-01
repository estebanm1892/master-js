"use strict";

// Funciones Anonimas
//  Es una función que no tiene nombre

// var movie = function (name) {
//   return "La pelicula es: " + name;
// };

function suma(num1, num2, sumarYMostrar, sumarPorDos) {
  var sumar = num1 + num2;

  sumarYMostrar(sumar);
  sumarPorDos(sumar);
  return sumar;
}

suma(
  5,
  7,
  (dato) => {
    console.log("La suma es: ", dato);
  },
  (dato) => {
    console.log("La suma por dos es: ", dato * 2);
  }
);
