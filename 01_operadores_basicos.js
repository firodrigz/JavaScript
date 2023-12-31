//OPERADORES BÁSICOS

//Suma-Concatena
let suma = 10 + 20;
console.log(suma);

let name1 = "Pepe";
let name2 = "Martin";
let name3 = "Leonel";
console.log("Hola" + " " + name1 + " " + name2 + " " + name3); // Concatena strings

const numbers = [1, 2, 3];
const numbers2 = [4, 5];
const allNumberSpread = [...numbers, ...numbers2]; //Es una manera de concatenar arrays (tamb podemos usar concat()) y objetos
console.log(allNumberSpread);

// Uso de backticks
console.log(`Hola ${name1} ${name2} ${name3} - con backticks`);

54 - 85; // Resta
45 * 2; // Multiplicación
9 / 3; // División entera sin decimal
9 % 3; // Resto de la división
9 < 10; // 9 menor que 10
9 <= 10; // 9 menor igual que 10
10 > 9; // 10 mayor que 9
10 >= 9; // 10 mayor igual que 9
3 ** 3; // 3 exponente 3 = 27

//  (condicion) && (condicion)  And (Y)  solo es verdadero cuando las 2 condiciones son verdaderas
//  (condicion) || (condicion) Or (O)

let variable = "Bob";
// Asignación
let nro = 40;
let rej,
  cont = 0;

// Identidad/igualdad
let miVariable = 3;
miVariable == 4; // Comprueba si el valor es igual
miVariable === 4; //Comprueba si el valor y tipo de dato son igual , y devuelve un valor de true/false (booleano).

miVariable !== 3; // Distinto
!miVariable; //Negador ¬

//TYPEOF
//El operador typeof es un operador especial que nos permite conocer el tipo que tiene la variable sobre la que operamos.
typeof 5; // number
typeof false; // boolean
typeof "Facundo"; // string
console.log(typeof undefined); // undefined

/* PARA MÁS OPERADORES VISITAR: 

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators

*/
