"use strict";

// Plantillas de texto

var nombre = prompt("tu nombre");
var apellidos = prompt("tus apellidos");

// var texto = "Mi nombre es: " + nombre + " y mis apellidos son " + apellidos;

var texto = `
<h1>Hola mi nombre es: ${nombre}</h1>
<h3>Hola mi apellido es: ${apellidos}</h3>
`;

document.write(texto);
