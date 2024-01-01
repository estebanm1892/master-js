"use strict";

window.addEventListener("load", function () {
  var tiempo;
  var encabezado = document.querySelector("h1");
  function intervalo() {
    // timers
    tiempo = setInterval(function () {
      console.log("intervalo");
      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "20px";
      } else {
        encabezado.style.fontSize = "50px";
      }
    }, 1000);
  }

  var start = document.querySelector("#start");
  start.addEventListener("click", function () {
    alert("Has INICIADO el intervalo en bucle");
    clearInterval(tiempo);
    intervalo();
  });

  var stop = document.querySelector("#stop");
  stop.addEventListener("click", function () {
    alert("Se paro el intervalo");
    clearInterval(tiempo);
  });
});
