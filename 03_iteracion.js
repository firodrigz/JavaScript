//CICLOS - BUCLES

//Se sale del ciclo solo cuando la condifición es falsa , si es verdadera queda en el ciclo!!


// ITERACIÓN DEFINIDA (Ciclo For)

for (let i = 0; i < array.length; i++) {
    const element = array[i];    
}

/*
for IN muestra posición del arreglo
for OF directamente muestra el contenido de la posición
*/

let array1 = ["maría","josefa","roberta"];
let array2 = ["pedro","marcelo",array1,"josefina"];

for(let array in array2){
    if (array == 2) {
        for(let array of array1){
            console.log(array + "<br>");
        }        
    } else {
        console.log(array2[array] + "<br>");        
    }
}

// Salida pedro marcelo maría josefa roberta


//ITERACIÓN CONDICIONADA (Ciclo While)

let condition = 1;   // se debe ingresar la condición afuera

while (condition) {
    condition++; //suma contador
    let condition; //se vuelve a ingresar confición
}

// Puede pasar 0 o n veces por el while

do {
    
} while (condition);

//Pasa si o si una vez por el while