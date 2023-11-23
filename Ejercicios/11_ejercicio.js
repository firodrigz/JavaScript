//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const miFuncion = (cadena = "") =>
  !cadena ? "No enviaste ninguna cadena" : cadena.length;
let resultado1 = miFuncion("Hola mundo");
console.log(resultado1); //10

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const textoRecortado = (cadena = "", nro = undefined) => {
  if (!(cadena === "" || nro === undefined)) {
    console.info(cadena.slice(0, nro));
  } else {
    console.warn("Ingrese una número válido o una cadena de mayor longitud");
  }
};

textoRecortado("Hola mundo", 4);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const stringArray = (string = "", caracter = undefined) => {
  !string
    ? console.warn("No ingresaste una cadena de texto")
    : caracter === undefined
    ? console.warn("No ingresaste caracter separador")
    : console.log(string.split(caracter));
};

stringArray("Lorem ipsum", " ");

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirTexto = (string = "", vecesARepetir = undefined) => {
  if (!string) {
    return console.warn("No ingresaste texto");
  }

  if (vecesARepetir === undefined) {
    return console.warn("No ingresaste veces a repetir");
  }

  if (vecesARepetir === 0 || vecesARepetir < 0) {
    return console.error("Número incorrecto, ingrese nro mayor a 0");
  }

  for (let i = 0; i < vecesARepetir; i++) {
    console.log(string);
  }
};

repetirTexto("Hola Mundo", 0);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirPalabras = (cadena = "") => {
  if (!cadena) {
    return console.warn("Ingrese una cadena de texto");
  }
  const array = cadena.split(""); //Pasamos cadena vacía porque queremos que cada letra(incluyendo espacio) sea una posición del array
  array.reverse();
  return (cadenaInvertida = array.join("")); //Volvemos a pasar cadena vacía
};
console.log(invertirPalabras("Hola Mundo"));

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarPalabrasRepetidas = (cadena, condicion) => {
  cadena = cadena ?? "";
  condicion ??= "";
  if (!cadena) {
    return console.warn("Ingrese cadena de texto");
  }
  if (!condicion) {
    return console.warn("Ingrese palabra a buscar");
  }
  let expresionReg = new RegExp("\\b" + condicion + "\\b", "g");
  let arraySoloConPalabrasCondicion = cadena.match(expresionReg);
  let vecesRepetidas;
  //console.log(arraySoloConPalabrasCondicion) Vemos que el método match en caso de no encontrar la palabra, devuelve null
  if (arraySoloConPalabrasCondicion === null) {
    vecesRepetidas = 0;
  } else {
    vecesRepetidas = arraySoloConPalabrasCondicion.length;
  }
  console.log(`La palabra ${condicion} se repite ${vecesRepetidas}`);
};
contarPalabrasRepetidas("", "mundo");

/*let i,  contador = 0;
i = cadena.indexOf(condicion);
while (i !== -1) {   
  contador++;
  i = cadena.indexOf(condicion, i++); 
}
return console.log(`La palabra ${condicion} se repite ${contador} veces`);*/

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const validarPalindromo = (cadena) => {
  cadena ??= "";
  if (!cadena) {
    return console.log("Se esperaba una cadena o frase");
  }
  cadena = cadena.toLowerCase();
  let darVuelta = cadena.split("").reverse().join("");
  if (cadena === darVuelta) {
    return console.log("Es palíndromo");
  } else {
    return console.log("No es palíndromo");
  }
};
validarPalindromo("Neuquen");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarPatron = (cadena, patron) => {
  cadena ??= "";
  patron ??= "";
  if (!cadena) return console.log("Ingrese una cadena");
  if (!patron) return console.log("Ingrese un patrón valido");
  console.log(cadena.replaceAll(patron, ""));
};
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

