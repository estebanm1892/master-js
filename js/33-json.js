"use strict";

// JSON - JavaScript Object Notation

var pelicula = {
  titulo: "batman vs superman",
  año: 2017,
  pais: "EEUU",
};

var peliculas = [{ titulo: "hola", año: 2016, pais: "francia" }, pelicula];

var caja_peliculas = document.querySelector("#peliculas");

for (let index in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[index].titulo + " - " + peliculas[index].año);
  caja_peliculas.append(p);
}

console.log(peliculas);
