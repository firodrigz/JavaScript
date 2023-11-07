// ESTRUCTURA IF
const valorDelPasaje = 1000;

if (valorDelPasaje === 1000) {
    console.log('El pasaje vale 1000');
}

const ciudadDeDestino = "Bogotá";
const ciudadesDisponiblesParaViajar = new Array("Bogotá", "Lima", "Santiago", "Montevideo"); //new Array es el prototipo para crear el array

//Palabra reservada if
//Evalua una condición

let edadDelPasajero = 17;
let estaAcompanad0 = true;

console.log(`Verificando pasajes para  ${ciudadDeDestino}`);
if ((ciudadesDisponiblesParaViajar.indexOf(ciudadDeDestino) > -1) &&
    (edadDelPasajero >= 18 || estaAcompanad0)) {
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar or pasajero no cumple las reglas');
}  //En este caso indexOf() busca el elemento que le enviamos como parámetro y nos devuelve el index

//Aplicando lógica negativa
if (!(ciudadesDisponiblesParaViajar.indexOf(ciudadDeDestino) > -1 &&
    (edadDelPasajero >= 18 || estaAcompanad0))) {
    console.log('Ciudad no disponible para viajar or pasajero no cumple las reglas');
} else {
    console.log('Pasaje disponible para venta');
}


//ESTRUCTURA IF - ELSE

const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para  ${ciudadDestino}`);
//Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado) {
    //Evaluamos si la ciudad esta disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar');
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Pasajero no cumple las reglas');
    }
    
}


///// IF ANIDADOS

const ciudadDestino2 = "Bogotá";
const ciudadesDisponibles2 = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero2 = 18;
let estaAcompanado2 = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para  ${ciudadDestino2}`);

// A && B || C
if (ciudadesDisponibles2.indexOf(ciudadDestino2) > -1 &&
    edadPasajero2 >= 18 && 
    tienePasaporte && 
    !estaCasado) {
    console.log('Paquete para solteros disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
}


// ESTRUCTURA SWITCH

// Condicion no puede tener operadores de rangos - solo puede tener operadores de comparación

switch (condicion) {  
    case value:
                console.log("Hola");
    break;

    default:
                console.log("No se cumple con ninguna de las condiciones");
    break;
}


const ciudadesDisponibles3 = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const ciudadDestino3 = "Quito";

let valorPasaje = 0;

console.log(`Verificando pasajes para  ${ciudadDestino3}`);

    //Condición con if
    /*
    if (ciudadDestino == "Bogotá") {
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima") {
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago") {
        valorPasaje = 380;
    } else if (ciudadDestino == "Montevideo") {
        valorPasaje = 200;
    }*/
    switch(ciudadDestino3) {
        case "Bogotá": 
            valorPasaje = 500;
            break;
        case "Lima": 
            valorPasaje = 400;
            break;
        case "Santiago": 
            valorPasaje = 380;
            break;
        case "Montevideo": 
            valorPasaje = 200;
            break;
        default:
            console.log(`No hay pasajes para la ciudad indicada`);
            break;
    }
    if (valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPasaje}`);