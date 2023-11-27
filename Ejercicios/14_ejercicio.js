//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayAlCuadrado = (array = []) => {
  if (array.length < 1) {
    return console.error("Ingrese un array con números a elevar al cuadrado");
  }
  if (!(array instanceof Array))
    return console.error("El valor ingresado NO es un array");

  for (let numero of array) {
    if (typeof numero !== "number")
      return console.warn(
        "El arreglo contiene un elemento que NO es un número"
      );
  }

  let alCuadrado = [];

  alCuadrado = array.map((elemento) => {
    return Math.pow(elemento, 2);
  });

  return console.log(alCuadrado);
};

arrayAlCuadrado([8, "array"]);
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxAndMin = (array = []) => {
  if (array.length < 1) {
    return console.error("Ingrese un array con números a elevar al cuadrado");
  }
  if (!(array instanceof Array))
    return console.error("El valor ingresado NO es un array");

  for (let numero of array) {
    if (typeof numero !== "number")
      return console.warn(
        "El arreglo contiene un elemento que NO es un número"
      );
  }

  let maxMin = [];
  let max = array[0];
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  maxMin.push(max, min);

  /*
    max = Math.max(...array);
    min = Math.min(...array);
  */
  return maxMin;
};

console.log(maxAndMin([1, 4, 5, 99, -60]));

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresAndImpares = (array = []) => {
  if (array.length === 0) return console.warn("El array ingresado está vacío");
  if (!(array instanceof Array))
    return console.error("El valor ingresado NO es un array");
  for (let elemento of array) {
    if (typeof elemento !== "number")
      return console.warn(`El valor ${elemento}, NO es un número`);
  }

  const resultado = {
    pares: [],
    impares: [],
  };

  const { pares, impares } = resultado;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    } else {
      impares.push(array[i]);
    }
  }

  return resultado;
};

console.log(paresAndImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenamiento = (array = []) => {
  if (array.length === 0) return console.warn("El array ingresado está vacío");
  if (!(array instanceof Array))
    return console.error("El valor ingresado NO es un array");
  for (let elemento of array) {
    if (typeof elemento !== "number")
      return console.warn(`El valor ${elemento}, NO es un número`);
  }

  const resultadoOrdenamiento = {
    ascendente: array.map((elemento) => elemento).sort(),
    descendente: array
      .map((elemento) => elemento)
      .sort()
      .reverse(),
  };

  return resultadoOrdenamiento;
};

console.log(ordenamiento([7, 5, 7, 8, 6]));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarDuplicados = (array = []) => {
  if (array.length === 0) return console.warn("El array ingresado está vacío");
  if (array.length === 1)
    return console.warn("El array debe tener más de 1 elemento");
  if (!(array instanceof Array))
    return console.error("El valor ingresado NO es un array");

  /*return console.info({
    original: array,
    sinDuplicado: array.filter(
      (elemento, index, arreglo) => arreglo.indexOf(elemento) === index
    ),
  });*/

  return console.info({
    original: array,
    sinDuplicado: [...new Set(array)],
  });
};

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (array = []) => {
  if (array.length === 0) return console.warn("El array ingresado está vacío");
  if (!(array instanceof Array))
    return console.error("El valor ingresado NO es un array");
  for (let elemento of array) {
    if (typeof elemento !== "number")
      return console.warn(`El valor ${elemento}, NO es un número`);
  }

  return console.info(
    array.reduce((total, num, index, arreglo) => {
      total += num;
      if (index === array.length - 1) {
        return `El promedio de ${arreglo.join("+")} es ${
          total / arreglo.length
        }`;
      } else {
        return total;
      }
    })
  );
};

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
