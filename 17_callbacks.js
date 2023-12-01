//CALLBACKS
//Mecanismo para trabajar con asincronía

//callback utilizado como recursividad

function recursividad(value, result) {
  console.log(`Callback: ${value}, resultado: ${result}`);
}

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value); //value*value es una función callback
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia callback");
  console.log(`Callback: ${value}, resultado: ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, resultado: ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, resultado: ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, resultado: ${result}`);
        cuadradoCallback(6, recursividad);
      });
    });
  });
});

//En conclusión: Es un llamado de una función dentro de todo pero que esa función  que se llamará es enviada en la invocación, se pasa en el argumento
