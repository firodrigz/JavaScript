//Array
/*indice [0,1,2,3] = longitud-1
elemento [1,2,3,4]*/

//Definición de una lista con tipo de dato alfanumérico
const ciudadesDisponibles = new Array("Bogotá", "Buenos Aires", "Lima");
console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Argentina", "Perú"];
console.log(paisesDisponibles[0]);

//Su PROPIEDAD más importante es LENGTH - Nos indica la CANTIDAD de elementos dentro de la cadena
console.log(paisesDisponibles.length);
/*También sirve para cortar cadenas*/
console.log(ciudadesDisponibles);
ciudadesDisponibles.length = 2; //Cortamos la cadena a 2 elementos
console.log(ciudadesDisponibles);

//MÉTODOS MÁS IMPORTANTES
{
  //PUSH - AGREGA nuevo elemento al FINAL devolviendo nueva longitud de la cadena (puedo agregar más de un elemento)
  let retornmo = paisesDisponibles.push("Uruguay");
  console.log(paisesDisponibles);
  console.log(retornmo);

  //UNSHIFT - AGREGA nuevo elemento al INICIO devolviendo nueva longitud de la cadena
  retornmo = paisesDisponibles.unshift("Uruguay");
  console.log(paisesDisponibles);
  console.log(retornmo);

  //SHIFT - ELIMINA el PRIMER elemento, devuelve el elemento eliminado (en forma de string)
  let eliminado = paisesDisponibles.shift();
  console.log(paisesDisponibles);
  console.log(eliminado);

  //POP - ELIMINA el ÚLTIMO elemento, devuelve el elemento eliminado (en forma de string)
  paisesDisponibles.pop();
  console.log(paisesDisponibles);
  console.log(eliminado);

  //SPLICE - REEMPLAZA elementos y muestra el reemplazado
  let eliminados = paisesDisponibles.splice(1, 1, "Venezuela");
  console.log(paisesDisponibles);
  console.log(eliminados);

  //JOIN - CONVIERTE un arreglo en una CADENA DE CARACTERES, unifica
  console.log(paisesDisponibles.join("-"));

  //SORT - ORDENA la lista (convierte en string y según ASCII)
  console.log(paisesDisponibles.sort()); //MODIFICA el arreglo OJO!
  console.log(paisesDisponibles);

  const numeros = [5, 10, 2, 25, 7];
  numeros.sort(function (a, b) {
    return a - b;
  });
  console.log(numeros); // [2, 5, 7, 10, 25] (Ordena de menor a mayor)

  numeros.sort((a, b) => b - a);
  console.log(numeros); // [25, 10, 7, 5, 2] (Ordena de mayor a menor)

  //INDEXOF - BÚSQUEDA DE ELEMENTO, permitiendo conocer la posición, si no la encuentra devuelve -1
  console.log(`Perú está en la posición: ${paisesDisponibles.indexOf("Perú")}`);
  /* También nos permite poner un argumento para indicar a partir de que posición comienza a buscar */

  //INCLUDES - BÚSQUEDA SOLO conocer EXISTENCIA, nos devuelve true o false dependiendo la existencia del elemento dentro del array
  let encuentra = paisesDisponibles.includes("Australia");
  console.log(encuentra);
  /* También nos permite poner un argumento para indicar a partir de que posición comienza a buscar */
  encuentra = paisesDisponibles.includes("Australia", 2);
  console.log(encuentra);

  //SOME - permite verificar si AL MENOS UNO de los elementos de un array cumple con una CONDICIÓN, devuelve TRUE O FALSE. + más potente que INCLUDES
  /*Esto nos permite hacer condiciones de búsqueda más específicas*/
  let tieneAustralia = paisesDisponibles.some((pais) => pais === "Australia"); //deja de iterar cuando uno cumple
  console.log(tieneAustralia);

  //EVERY - permite verificar si TODOS los elementos de un array cumplen con una CONDICIÓN, devuelve TRUE O FALSE.
  /*Esto nos permite hacer condiciones de búsqueda más específicas*/
  let todosAustralia = paisesDisponibles.every((pais) => pais === "Australia"); //deja de iterar cuando uno cumple
  console.log(todosAustralia);

  //FIND - devuelve el primer elemento que cumple con la condición. SI NO ENCUENTRA devuelve UNDEFINED.
  const vectorNumbers = [13, 27, 44, -10, 81]; // encuentra el primer número negativo
  const firstNegativeNumber = vectorNumbers.find((number) => number < 0);
  console.log(firstNegativeNumber); // -> -10

  //CONCAT - UNIFICA dos listas, creando NUEVO ARRAY
  const listaPaisesyCiudades = paisesDisponibles.concat(ciudadesDisponibles);
  console.log(listaPaisesyCiudades);

  //FILL - permite rellenar un array con un único valor
  const relleno = Array(100).fill("Hola");
  console.log(relleno);

  //FILTER - FILTRAR elementos , podemos poner cualquier condición y usarlo para CREAR UN NUEVO ARREGLO A PARTIR DE LA CONDICIÓN
  const paisesFiltrados = paisesDisponibles.filter((e) => e == "Venezuela");
  console.log(paisesFiltrados);

  const paisesFiltrados2 = paisesDisponibles.filter((e) => e.length > 6);
  console.log(paisesFiltrados2);

  //REDUCE - permite crear un único valor a partir de un array
  const vNumbers = [1, 2, 3];
  const sum = vNumbers.reduce((accumulator, currentNumber, index) => {
    return accumulator + currentNumber;
  }, 0); // <- el 0 es el valor inicial
  console.log(sum); // 6

  /*Ejemplo práctico*/
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const doubleEvenNumbers = numbers.reduce((accumulator, currentNumber) => {
    const isEven = currentNumber % 2 === 0;
    const doubled = currentNumber * 2;
    const isGreaterThanFive = doubled > 5;

    // si es par y mayor que 5, lo añadimos al array
    if (isEven && isGreaterThanFive) {
      // para ello devolvemos un nuevo array con el valor actual
      return accumulator.concat(doubled);
    } else {
      // si no, devolvemos lo que ya teníamos
      return accumulator;
    }
  }, []); // <- el array vacío es el valor inicial

  console.log(doubleEvenNumbers); // [8, 12]
}



/*DIFERENCIA ENTRE FOREACH Y MAP
-forEach solo recorre elementos del arreglo y no retorna nada
-Map reccorre elementos del arreglo Y retorna un nuevo arreglo MODIFICADO*/

/* Uso del forEach */
arreglo.forEach(function (element) {
  console.log(element);
}); //recorrido con forEach
let lenguajes = ["ruby", "php", "c"];
lenguajes.forEach(function (lenguaje, indice, arreglo) {
  console.log(lenguaje, indice, arreglo);
});

/* Modificar arreglos con map */
//genera un nuevo arreglo

let numeros = [1, 2, 3, 5, 34];
let cuadrados = numeros.map(function (numero) {
  return numero * numero;
});
console.log(cuadrados);
