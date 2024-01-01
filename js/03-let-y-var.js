'use strict'

// pruebas let y var

// prueba con var
var numero = 40;

if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); // valor 50

// prueba con let

var texto = "Curso de Js";
console.log(texto);

if (true) {
    let texto = "curso de laravel 5";
    console.log(texto);
}

console.log(texto);