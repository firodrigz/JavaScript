//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const nroAleatorio = () => {
  console.log(Math.round(Math.random() * 100 + 500));
};
nroAleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const esCapicua = (numero) => {
  numero ??= 0;
  if (!numero) return console.log("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado NO es un número`);

  numero = numero.toString();
  let stringDadoVuelta = numero.split("").reverse().join("");

  if (stringDadoVuelta == numero) {
    console.log("Es capicúa");
  } else {
    console.log("No es capicúa");
  }
};
esCapicua(19);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero) => {
  numero ??= undefined;
  if (numero == undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error("El valor ingresado NO es un número");
  if (numero === 0) return console.error("El número no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.log(`El factorial de ${numero} es ${factorial}`);
};
factorial(5);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const esPrimo = (nro = undefined) => {
  if (nro === undefined) return console.warn("Ingrese un número válido");
  if (typeof nro !== "number")
    return console.error("Ingrese un valor numérico");
  if (nro === 0) return console.error("Ingrese un número mayor a 0");
  if (Math.sign(nro) === -1)
    return console.error("El número no puede ser negativo");

  let primoValido = true;
  for (let i = 2; i < nro; i++) {
    if (nro % i === 0) {
      primoValido = false;
    }
  }

  return primoValido;
};
console.log(esPrimo(7));

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const esParOImpar = (nro = undefined) => {
  if (nro === undefined) return console.warn("Ingrese un número válido");
  if (typeof nro !== "number")
    return console.error("El valor ingresado NO es un número");

  if (nro % 2 === 0) {
    return console.log("Es par");
  } else {
    return console.log("Es impar");
  }
};
esParOImpar(29);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const conversionTemperatura = (nro = undefined, selector = "") => {
  if (nro === undefined) return console.warn("Ingrese un número válido");
  if (typeof nro !== "number")
    return console.error("El valor ingresado NO es un número");
  if (selector === "") return console.warn("No se ingresó un selector");
  if (typeof selector !== "string")
    console.error("El valor ingresado NO es un caracter de selección");
  if (selector.length > 1 || !/C|F|c|f/.test(selector))
    return console.warn("Se esperaba un solo caracter");

  if (selector.toUpperCase() === "C") {
    let conversionAF = (nro * 9) / 5 + 32;
    return console.log(`${nro} °C es igual a ${conversionAF.toFixed(2)} °F `);
  } else if (selector.toUpperCase() === "F") {
    let conversionAC = (nro - 32) * (5 / 9);
    return console.log(`${nro} °F es igual a ${conversionAC.toFixed(2)} °C `);
  }
};
conversionTemperatura(34, "F");

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const pasajeUnidades = (numero = undefined, base = undefined) => {
  if (numero === undefined || base === undefined)
    return console.warn("Asegurese de ingresar valores");
  if (typeof numero !== "number" || typeof base !== "number")
    return console.error("El valor ingresado NO es un número");
  if (!/^(2|10)$/.test(base))
    return console.error("Se esperaba base 10 o base 2");

  if (base === 2) {
    return console.log(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
  }
};
pasajeUnidades(false, 10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const montoFinal = (neto = undefined, descuento = 0) => {
  if (neto === undefined)
    return console.warn("Ingrese un valor pertenececiente al sueldo neto");
  if (typeof neto !== "number")
    return console.error(`El valor ingresado ${neto}, NO es un número`);
  if (Math.sign(neto) === -1)
    return console.error("El valor no puede ser negativo");
  if (descuento === 0) return console.warn("El descuento no puede ser 0");
  if (typeof descuento !== "number")
    return console.error(`El valor ingresado ${descuento}, NO es un número`);
  if (Math.sign(descuento) === -1)
    return console.error("El valor no puede ser negativo");

  let montoTotal;
  montoTotal = Math.round(neto - (neto * descuento) / 100);
  console.log(`El monto final es de: ${montoTotal}`);
};
montoFinal(1000, 20);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularEdad = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha válida");

  let fechaActual = new Date().getTime();
  let fechaIngresada = fecha.getTime();
  let diferenciaEnMilisegundos = fechaActual - fechaIngresada;
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let tiempoPasadEnAnios = Math.floor(diferenciaEnMilisegundos / aniosEnMS);

  if (Math.sign(tiempoPasadEnAnios) === -1) {
    return console.info(`Faltan ${Math.abs(tiempoPasadEnAnios)} años`);
  } else if (Math.sign(tiempoPasadEnAnios) === 0) {
    return console.info(`Estamos en el año actual`);
  } else {
    return console.info(`Han pasado ${tiempoPasadEnAnios}`);
  }
};

calcularEdad(new Date(2028, 9, 15));
