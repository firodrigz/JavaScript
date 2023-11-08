//Array
/*indice [0,1,2,3]
elemento [1,2,3,4]*/

//Definición de una lista con tipo de dato alfanumérico
const ciudadesDisponibles = new Array("Bogotá", "Buenos Aires", "Lima");
console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Argentina", "Perú"];
console.log(paisesDisponibles[0]);

{
    //agrega al final devolviendo nueva longitud de la cadena
    retornmo = paisesDisponibles.push("Uruguay");  
    console.log(paisesDisponibles);
    console.log(retornmo);

    //agrega al inicio devolviendo nueva longitud de la cadena
    retornmo = paisesDisponibles.unshift("Uruguay");  
    console.log(paisesDisponibles);
    console.log(retornmo);

    //reemplaza elementos y muestra el reemplazado
    eliminados = paisesDisponibles.splice(1,1,"Venezuela");  
    console.log(paisesDisponibles);
    console.log(eliminados);

    //remueve el primer elemento
    paisesDisponibles.shift(); 

    //remueve el último elemento
    paisesDisponibles.pop(); 

    console.log(paisesDisponibles);

    //filtrar elementos , podemos poner cualquier condición
    const paisesFiltrados = paisesDisponibles.filter((e) => e == "Venezuela");     
    console.log(paisesFiltrados);

    const paisesFiltrados2 = paisesDisponibles.filter((e) => e.length > 6);
    console.log(paisesFiltrados2);

    //convierte un arreglo en una cadena de caracteres, unifica
    console.log(paisesDisponibles.join('-'));   

    //ordenar la lista
    console.log(paisesDisponibles.sort());  //modifica el arreglo OJO!
    console.log(paisesDisponibles);

    //conociendo la posición
    console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

    //unificar dos listas
    const listaPaisesyCiudades = paisesDisponibles.concat(ciudadesDisponibles);
    console.log(listaPaisesyCiudades);

}

let usuario = ["Facu",,20,1.73];  // selección de un elemento específico
console.log(usuario[0]); 


/*Recorrido de un vector*/

let arreglo = [1,4,3,5];
let i;

for(i=0; i < arreglo.length; i++){
    console.log(arreglo[i]);    
} 
 
/* Uso del forEach */

arreglo.forEach(function(element){ console.log(element) }); //recorrido con forEach

///////////////////////
 
let lenguajes = ["ruby", "php", "c"]; 

//es un método del arreglo mismo
lenguajes.forEach(function(lenguaje,indice,arreglo){ console.log(lenguaje,indice,arreglo)  });


/* Modificar arreglos con map */

//genera un nuevo arreglo 

let numeros = [1,2,3,5,34];

let cuadrados = numeros.map(function(numero){ return numero * numero; });

console.log(cuadrados);
