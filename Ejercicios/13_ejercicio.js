//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const cuentaVocalesYConsonantes = (cadena = "") => {
  if (cadena === "") return console.warn("Ingrese cadena de texto");
  if (typeof cadena !== "string")
    return console.error("El valor ingresado NO es una cadena de texto");

  let consonantes = 0,
    vocales = 0;

  cadena = cadena.toLowerCase();

  for (let letra of cadena) {
    if (/[aeiuoáéíúó]/.test(letra)) {
      vocales++;
    } else if (/[b-df-hj-np-tv-z]/.test(letra)) {
      consonantes++;
    }
  }

  return console.log(`Vocales: ${vocales}, Consonantes: ${consonantes}.`);
};

cuentaVocalesYConsonantes("Hola Mundo");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (cadena = "") => {
  if (cadena === "") return console.warn("Ingrese cadena de texto");
  if (typeof cadena !== "string")
    return console.error("El valor ingresado NO es una cadena de texto");

  let expRegular = /^[A-Za-zÑñáéíóúÁÉÍÓÚÜü,\s]+$/g.test(cadena); //g indica que lo va a validar en todos los caracteres, no ahorramos el for. ^ significa que no puede haber nada antes de la expresión

  if (expRegular) {
    return console.log("Nombre válido");
  } else {
    return console.log("Nombre inválido");
  }
};

validarNombre("Rodríguez, Facundo");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (cadena = "") => {
  if (cadena === "") return console.warn("Ingrese cadena de texto");
  if (typeof cadena !== "string")
    return console.error("El valor ingresado NO es una cadena de texto");

  let expRegular =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      cadena
    ); //g indica que lo va a validar en todos los caracteres, no ahorramos el for. ^ significa que no puede haber nada antes de la expresión

  if (expRegular) {
    return console.log("Email válido");
  } else {
    return console.log("Email inválido");
  }
};

validarEmail("firodrigz@gmail.com");

//Funsión
const validar = (cadena = "", patron = undefined) => {
  if (cadena === "") return console.warn("Ingrese cadena de texto");
  if (typeof cadena !== "string")
    return console.error("El valor ingresado NO es una cadena de texto");

  if (patron === undefined) return console.warn("Ingrese patrón");
  if (!(patron instanceof RegExp))
    return console.error("El valor ingresado NO es una expresión regular");

  let expRegular = patron.test(cadena);

  if (expRegular) {
    return console.log("Ingreso válido");
  } else {
    return console.log("Ingreso inválido");
  }
};

validar(
  "firodrigz@gmail.com",
  /[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/i
);
