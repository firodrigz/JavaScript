/*Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.*/

function getKeysOfBooleanValues(obj) {
  const vectorDevolver = [];
  const matriz = Object.entries(obj);
  for (let propiedad in matriz) {
    if (typeof matriz[propiedad][1] == "boolean") {
      vectorDevolver.push(matriz[propiedad][0]);
    }
  }
  return vectorDevolver;
}
