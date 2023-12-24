//Promesas

function cuadradoPromise(value) {
  /*if (typeof value !== "number") {
    return Promise.reject({
      msg: `Error, el valor ${value} ingresado, no es un nro`,
    });
  }*/

  return new Promise((resolve, reject) => {
    if (typeof value !== "number") {
      reject({
        msg: `Error, el valor ${value} ingresado, no es un nro`,
      });
    }

    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));

  });
}

cuadradoPromise(0)
  .then((response) => {
    //console.log(response);
    console.log(`Promise: ${response.value}, ${response.result}`);
    return cuadradoPromise(1);
  })
  .then((response) => {
    console.log(`Promise: ${response.value}, ${response.result}`);
    return cuadradoPromise(2);
  })
  .then((response) => {
    console.log(`Promise: ${response.value}, ${response.result}`);
    return cuadradoPromise(3);
  })
  .then((response) => {
    console.log(`Promise: ${response.value}, ${response.result}`);
    return cuadradoPromise(4);
  })
  .then((response) => {
    console.log(`Promise: ${response.value}, ${response.result}`);
    return cuadradoPromise(5);
  })
  .then((response) => {
    console.log(`Promise: ${response.value}, ${response.result}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));
