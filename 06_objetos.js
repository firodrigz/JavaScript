// OBJETOS

let a = new String("Hola");
//console.log(a)

const b = {};
console.log(b);

const c = new Object();
console.log(c);

/* dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */
const usuario = {
  nombre: "Facu",
  apellido: "Rodríguez",
  edad: 21,
  pasatiempos: ["Juntarme con amigos", "Hacer ejercicio", "Cocinar"],
  soltero: false,
  contacto: {
    email: "firodrigz@gmail.com",
    twitter: "@...",
    movil: "5215512345678",
  },
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`
    );
  },
};

//IMPORTANTE PONER FUNCTION YA QUE LAS FUNCIONES FLECHA
/*No tiene sus propios enlaces a this o super y no se debe usar como métodos.*/

console.log(usuario);
console.log(usuario["nombre"]); //Forma no recomendada para ingresar al valor de los objetos
console.log(usuario["apellido"]);
console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.soltero);
console.log(usuario.pasatiempos);
console.log(usuario.pasatiempos[1]);
console.log(usuario.contacto);
console.log(usuario.contacto.twitter);
usuario.saludar();
usuario.decirMiNombre();

console.log(Object.keys(usuario)); //Nos devuelve la cantidad de keys del usuario en un ARREGLO
console.log(Object.values(usuario)); //Nos devuelve un ARREGLO con todos los valores
console.log(Object.entries(usuario)); //Nos devuelve un ARREGLO DE ARREGLO con las keys y valores
console.log(usuario.hasOwnProperty("nombre")); // Evaluamos si existe la key dentro del objeto o no - devuelve true o false
console.log(usuario.hasOwnProperty("nacimiento"));

//Agregar, modificar y eliminar propiedades de un objeto
const persona = { name: "Juan" };
persona.age = 30;
console.log(persona); // -> { name: 'Juan', age: 30 }
delete persona.age;
console.log(persona); // -> { name: 'Dani' }

//Destructuración
const spiderman = {
  name: "Spidey",
  universe: 42,
  powers: ["web", "invisibility", "spider-sense"],
};
/*
const powers = spiderman.powers;
const universe = spiderman.universe;
*/
const { powers, universe, name } = spiderman;
// Destructuración con valor por defecto en el caso que no exista la propiedad
const { powerScore = 100 } = spiderman;
//Renombrar constantes
const { name: spideyName } = spiderman;

console.log(spiderman["name"]); // Spidey
console.log(spiderman.name); // Spidey

//Operador de Encadenamiento Opcional
const gamesystem = {
  name: "PS5",
  price: 550,
  specs: {
    cpu: "AMD Ryzen Zen 2",
    gpu: "AMD Radeon RDNA 2",
  },
};

console.log(gamesystem.specifications?.cpu);
// -> undefined
console.log(gamesystem.specs?.cpu);
// -> AMD Ryzen Zen 2
