/*
     Expresiones Regulares
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.

        https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    */

let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";

let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,}/gi;

//TEST()
console.log(expReg2.test(cadena)); //Devuelve TRUE O FALSE según si la expresión se encuentra o no en la cadena
//EXEC()
console.log(expReg2.exec(cadena)); //Devuelve un arreglo donde nos indica donde encontró a la expresión
