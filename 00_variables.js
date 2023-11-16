//VARIABLES

//Tipo de variables let, var y const
var global = "de uso global";
let local = "de uso local + recomendada";
const VALOR_CONSTANTE = 13.14;

//Objetos globales
window; // En navegadores
global; // En nodejs

//Tipos de datos

//Primitivos (accedemos al valor directamente)
let string = "Facu"; // Los strings tiene la propiedad string.length y diversos métodos como por ejemplo concat()
let number = 20;
let boolean = true; //Puede ser true o false
let nulo = null;
let indefinido = undefined;

//No primitivos - Compuestos (se accede por referencia) USO CONST
const array = [1, "Facu", false]; //Puede contener cualquier tipo de dato
const objeto = {
  color: "transparent",
  volume: 1,
  weight: 0.5,
};
