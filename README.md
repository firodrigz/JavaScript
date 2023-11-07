# JavaScript - Consideraciones

### Escritura de código

Los **identificadores** deben comenzar con:
* Una letra o
* Un signo de dolar $ o
* Un guión bajo _
* Nunca con números o caracteres especiales.

Usa **snake_case** en:
* Nombre de archivos:

`mi_archivo_javascript.js;`

Usa **UPPER_CASE** en:
* Constantes
```javascript
const UNA_CONSTANTE = "Soy una constante";  
const PI = 3.141592653589793;
```
Usa ***UpperCamelCase*** en:

- Clases
```javascript
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}
```

Usa **lowerCamelCase** en:
- Objetos:
```javascript
const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com",
};
```


- Primitivos:
```javascript
let unaCadena = "Hola Mundo";
let unNumero = 19;
let unBoolean = true;
```
- Funciones:
```javascript
function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");
```
- Instancias:
```javascript
const ajax = new XMLHttpRequest(),
  jon = new SerHumano("Jonathan", "Hombre");
```


------------

### Palabras reservadas
```javascript
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
```
