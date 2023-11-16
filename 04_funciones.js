//FUNCIONES  - Importante! las funciones van con CONST ya que se accede al valor por referencia y no directamente

// Cuando pasamos un valor al llamar a la función a ese valor se lo llama ARGUMENTO, mientras que lo que recibe una función es un PARÁMETRO

// FUNCIÓN EXPRESADA - FUNCTION EXPRESSION (No actúa el hoisting)
const suma = function (a, b) {
  return a + b;
};

// FUNCIÓN DECLARADA - DECLARACIÓN DE FUNCIÓN (Actúa el hoisting)
function sum(a, b) {
  return a + b;
}

// El pasaje de parámetros y el retornar algo de la función es opcional
function imprimirAlgo() {
  console.log("Imprimir algo");
}
imprimirAlgo(); //Función sin parámetro

function nombreFunction(parametro) {
  console.log(`Hola mundo!, mi nombre es ${parametro}`);
}
nombreFunction("Facundo"); //Función con parámetro

function sumar(a, b) {
  return a + b;
}

let resultadoFuncion = sumar(2, 2); //Función con parámetro y return
console.log(resultadoFuncion);

//Se puede imprimir una funcion dentro de otras
function saltarLinea() {
  console.log("saltoDeLinea");
  console.log("saltoDeLinea");
  console.log("saltoDeLinea");
}
function imprimir(frase) {
  console.log(frase);
  saltarLinea();
  console.log(frase);
}
imprimir("funcion dentro de otra");

//Cuando trabajo con un tipo de variable objeto el pasaje a la función se suele hacer con el objeto entero
function nombre(pepito) {
  console.log(pepito.name);
  console.log(pepito.valor);
  console.log(pepito.numero);
}
nombre({ name: "a", valor: 1.2, numero: 3 });

// FUNCIONES FLECHA

function saludar(frase) {
  console.log(frase);
} //función con nombre saludar, recibe frase

const saludar1 = function (frase) {
  console.log(frase);
}; //función sin nombre (anónima) asignada a constante saludar, recibe frase

const saludar2 = (frase) => {
  console.log(frase);
}; // función flecha con nombre saludar que recibe el parámetro frase

saludar("Hola Facu");
saludar1("Hola Facu");
saludar2("Hola Facu");

const returnImplicito = (a, b) => a + b; // Flecha con nombre saludar que no recibe parámetros , se retorna sola. EL RETURN ESTÁ IMPLÍCITO

let resultado = returnImplicito(2, 4);
console.log(resultado);

//OJO ACÁ porque si ponemos const returnImplicito = (a,b) => {a + b} ya NO ES UN RETURN IMPLÍCITO porque pusimos {} lo que nos obliga a escribir el RETURN
