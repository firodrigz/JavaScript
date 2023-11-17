/*En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas.
Por suerte, no hay dos libros con el mismo número de páginas.
Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro
 con menos páginas y el índice del libro con más páginas.*/

function minAndMaxWord(words) {
  let min = words[0];
  let minIndice, maxIndice;
  const array = [];
  for (let i = 1; i < words.length; i++) {
    if (words[i] < min) {
      min = words[i];
    }
  }
  let max = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i] > max) {
      max = words[i];
    }
  }
  minIndice = words.indexOf(min);
  maxIndice = words.indexOf(max);
  array.push(minIndice, maxIndice);
  return array;
}
