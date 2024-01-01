"use strict";

// Switch

var edad = 18;
var imprime = "";
switch (edad) {
  case 18:
    imprime = "acabas de cumplira la mayoría de edad";
    break;
  case 25:
    imprime = "eres un adulto";
    break;

  case 40:
    imprime = "crisis de los 40";
    break;

  default:
      imprime = "tu edad es neutra";
    break;
}

console.log(imprime);
