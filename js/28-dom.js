"use strict";

// DOM - Document Object Model

function cambiaColor(color) {
  caja.style.background = color;
}

// Conseguir elementos con un ID concreto

// var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.className = "hola";

// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");
// var contenido = todosLosDivs[2];
// contenido.innerHTML = "soy otro texto, ya no soy el segundo";
// console.log(contenido);

var valor;
for (valor = 0; valor < todosLosDivs.length; valor++) {
  var parrafo = document.createElement("p");
  var texto = document.createTextNode(todosLosDivs[valor].textContent);
  parrafo.appendChild(texto);
  document.querySelector("#miseccion").append(parrafo);
}

// Conseguir elementos por su clase
var divAmarrillo = document.getElementsByClassName("amarillo");
divAmarrillo[0].style.background = "yellow";
console.log(divAmarrillo);
// console.log(caja);

// Query Selector
var claseAmarrillo = document.querySelector("div.amarrillo");
console.log(claseAmarrillo);
