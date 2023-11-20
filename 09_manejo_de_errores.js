//MANEJO DE ERRORES

try {
  console.log("En el try se agrega el código a evaluar");
} catch (error) {
  console.log(`Captura el error ocurrido: ${error}`);
} finally {
  console.log("Se ejecuta siempre, exista o no error");
}

try {
  let numero = 10;
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un número");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
