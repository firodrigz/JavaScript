//FUNCIONES  - Importante! las funciones van con CONST ya que se accede al valor por referencia y no directamente

function nombreFunction (parametro){
    console.log(`Hola mundo!, mi nombre es ${parametro}`);
}
nombreFunction("Facundo"); //Las funciones son "acciones" y asi se las invoca

function imprimir(){
    console.log("Imprimir algo");
}
imprimir(); //No imprime el texto de cuando se invoca la funcion, ya que no hay ningun parametro


//Se puede imprimir una funcion dentro de otras
function saltarLinea(){
    console.log("<br>");
    console.log("<br>");
    console.log("<br>");
}

function imprimir(frase){
    console.log(frase);
    saltarLinea();
    console.log(frase);

}
imprimir("funcion dentro de otra");


//Cuando trabajo con un tipo de variable objeto el pasaje a la función se suele hacer con el objeto entero

function nombre(pepito){
        console.log(pepito.name)
        console.log(pepito.valor)
        console.log(pepito.numero)
}

nombre({name: "a", valor: 1.2, numero: 3});


// FUNCIONES FLECHA

function saludar(frase){    
    console.log(frase);
}                           //función con nombre saludar, recibe frase

const saludar1 = function (frase){
    console.log(frase);
}                           //función sin nombre asignada a constante saludar, recibe frase

const saludar2 = frase =>{
    console.log(frase);
}                           // función flecha con nombre saludar que recibe el parámetro frase

saludar("Hola Facu");


const saludar3 = () =>{
    document.write("Hola");
}                           // Flecha con nombre saludar que no recibe parámetros , se retorna sola.

