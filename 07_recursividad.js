// RECURSIVIDAD

//La recursividad es una técnica de programación que consiste en que una función se llame a sí misma. SIEMPRE ES IMPORTANTE TENER UNA CONDICIÓN DE SALIDA.

const cuentaAtras = (numero) => {
  if (numero < 0) {
    return;
  }
  console.log(numero);

  cuentaAtras(numero - 1);
};

cuentaAtras(3);

/*La ejecución la veríamos así:

cuentaAtras(3) -> (muestra 3)
               \ 
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida
*/

const calculoFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculoFactorial(n - 1);
  }
};

console.log(calculoFactorial(5));

/* Ejecución:

factorial(3) --------------------------> 6
        \ 
  3 * factorial(2) ---------------> 6
          \
    2 * factorial(1) -----------> 2
            \
      1 * factorial(0) -------> 1
*/

//

const suma = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + suma(n - 1);
};

console.log(suma(3));
