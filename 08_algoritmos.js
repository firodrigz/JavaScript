//Búsqueda secuencial

function findMaxAlgorithm(array) {
  let max = array[0]; // recuperamos el primer elemento del array

  // recorremos el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // ¿es el elemento actual mayor que el máximo?
    if (array[i] > max) {
      // si es así, lo guardamos como nuevo máximo
      max = array[i];
    }
  }

  // devolvemos el máximo número que hemos encontrado
  return max;
}

//Búqueda binaria (necesitamos que esté ORDENADO de menor a mayor)

function busquedaBinaria(array, elemento) {
  let index = 0; // primer elemento del array
  let final = array.length - 1; // último elemento del array a buscar

  // mientras el índice sea menor o igual que el final
  // seguiremos buscando
  while (index <= final) {
    // calculamos la mitad del array
    // como puede ser impar, usamos Math.floor para redondear hacia abajo
    const mitad = Math.floor((index + final) / 2);

    // si el elemento de la mitad es igual al elemento que estamos buscando
    // entonces hemos encontrado el elemento
    if (array[mitad] === elemento) {
      return mitad;
    } else if (array[mitad] < elemento) {
      // si el elemento de la mitad es menor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad derecha
      index = mitad + 1;
    } else {
      // si el elemento de la mitad es mayor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad izquierda
      final = mitad - 1;
    }
  }

  // si llegamos hasta aquí, es que no hemos encontrado el elemento
  // devolvemos -1, para indicar que no se ha encontrado
  return -1;
}

//FIBONACCI

const fibonacci = (n) => {
  /*if (n === 0) { return 0}
      if (n === 1) { return 1}*/
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(6));

//Sin recursividad es más óptimo ya que los valores se van guardando en el vector y se toman de allí

const fiboSinRecursividad = (n) => {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[n];
};

console.log(fiboSinRecursividad(6));
