"use strict";

window.addEventListener("load", function () {
  console.log("DOM cargado");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener("submit", function () {
    console.log("evento capturado");

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if (nombre.trim() == null || nombre.trim().length == 0) {
      alert("el nombre no es valido");
      document.querySelector("#error_nombre").innerHTML =
        "el nombre no es valido";
      return false;
    } else {
      document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellidos.trim() == null || apellidos.trim().length == 0) {
      document.querySelector("#error_apellido").innerHTML =
        "el apellido no es valido";
      return false;
    } else {
      document.querySelector("#error_apellido").style.display = "none";
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
      alert("la edad no es valida");
      document.querySelector("#error_edad").innerHTML = "la edad no es valida";
      return false;
    } else {
      document.querySelector("#error_edad").style.display = "none";
    }
    box_dashed.style.display = "block";

    console.log(nombre, apellidos, edad);

    var datos_usuario = [nombre, apellidos, edad];

    for (var indice in datos_usuario) {
      var parrafo = document.createElement("p");
      parrafo.append(datos_usuario[indice]);
      box_dashed.append(parrafo);
    }

    // var parrafo = document.createElement("p");
    // parrafo.append(nombre);
    // parrafo.append(apellidos);
    // parrafo.append(edad);
    // box_dashed.append(parrafo);
  });
});
