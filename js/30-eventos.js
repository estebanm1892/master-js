"use strict";

// Eventos de Ratón

window.addEventListener("load", function () {
  var boton = document.querySelector("#boton");

  function cambiarColor() {
    console.log("hola");
    var bg = boton.style.backgroundColor;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }
    return true;
  }

  var boton = document.querySelector("#boton");

  // Evento click
  boton.addEventListener("click", function () {
    cambiarColor();
    this.style.border = "10px solid black";
    console.log(this);
  });

  // Mouse over
  boton.addEventListener("mouseover", function () {
    boton.style.background = "#ccc";
  });

  // Mouse out
  boton.addEventListener("mouseout", function () {
    boton.style.background = "black";
  });

  var campo_nombre = document.querySelector("#campo_nombre");

  // focus
  campo_nombre.addEventListener("focus", function () {
    console.log("estas dentro del input");
  });

  // blur
  campo_nombre.addEventListener("blur", function () {
    console.log("estas fuera del input");
  });

  // keydown
  campo_nombre.addEventListener("keydown", function (event) {
    console.log("estas pulsando una tecla", String.fromCharCode(event.keyCode));
  });
  // keypress
  campo_nombre.addEventListener("keypress", function (event) {
    console.log("tecla presionada", String.fromCharCode(event.keyCode));
  });
  // keyup
  campo_nombre.addEventListener("keyup", function (event) {
    console.log("tecla soltada", String.fromCharCode(event.keyCode));
  });
});

// end load
