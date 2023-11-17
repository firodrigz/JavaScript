/*Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz 
y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
Si no encuentra la palabra debe devolver [-1, -1].*/

const matrix = [
  ["HTML", "CSS", "JavaScript"],
  ["Java", "C++", "Python"],
  ["Ruby", "Go", "Swift"],
];

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

function findJavaScript(matrix) {
  let i, j;
  let encontrado = [-1, -1];
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "JavaScript") {
        encontrado.shift();
        encontrado.pop();
        encontrado.push(i, j);
      }
    }
  }
  return encontrado;
}
