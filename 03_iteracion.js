//CICLOS - BUCLES
//Se sale del ciclo solo cuando la condifición es falsa , si es verdadera queda en el ciclo!!

// ITERACIÓN DEFINIDA (Ciclo For)

let arreglo = [1, 4, 3, 5];
let i;
for (i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

/* for IN muestra posición del arreglo
for OF directamente muestra el contenido de la posición */

let array1 = ["maría", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];

for (let array in array2) {
  if (array == 2) {
    for (let array of array1) {
      console.log(array);
    }
  } else {
    console.log(array2[array]);
  }
}

// Salida pedro marcelo maría josefa roberta josefina

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

//ITERACIÓN CONDICIONADA (Ciclo While)

let condition = 1; // se debe ingresar la condición afuera

while (condition) {
  condition++; //suma contador
  let condition; //se vuelve a ingresar confición
}

// Puede pasar 0 o n veces por el while

do {} while (condition);

//Pasa si o si una vez por el while

// CONTINUE Y BREAK
//continue se usa para saltar a la siguiente iteración del bucle y break para salir del bucle.

for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  // Solo mostramos este consola.log si es impar
  console.log(i);

  // Salimos del bucle al llegar al 7
  if (i === 7) {
    break;
  }
}
