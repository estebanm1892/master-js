"use strict";

// condicionales

// Condicional IF
// si A es igual a B entonces haz algo

var edad = 28;
var nombre = "Jorgis Mesa";

// Operadores Relacionales
/*
 Mayor: >
 Menor: <
 Mayor o igual: >=
 Menor o igual: <=
 Igual: == 
 Distinto: !=
 */
if (edad >= 18) {
  // el usuario es mayor de edad
  console.log(nombre + " tiene " + edad + " años, es mayor de edad");

  if (edad <= 33) {
    console.log("todavía eres millenian");
  } else if (edad >= 70) {
    console.log("Eres anciano");
  } else {
    console.log("ya no eres millenian");
  }
} else {
  // el usuario es menor de edad
  console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/*
Operadores Logicos 
AND(Y): &&
OR(O): ||
NEGACIÓN: !
*/

var year = 2028;

// NEGACIÓN
if (year != 2016) {
  console.log("el año no es 2016. El año es: " + year);
}

// AND
if (year >= 2000 && year <=2022) {
  console.log("estamos en la era actual");
}else{
  console.log("estamos en otra era");
}

// OR
if (year == 2008 || (year >= 2021 & year == 2028)) {
  console.log("el año acaba en 8");
}else{
  console.log("año no registrado");
}