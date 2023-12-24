//Trabajan junto a las promesas

function cuadradoPromise(value) {
  return new Promise((resolve, reject) => {
    if (typeof value !== "number") {
      reject(`Error, el valor ${value} ingresado, no es un nro`);
    }

    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
  
}

async function obtenerResultados() {
  try {
    const resultado = await cuadradoPromise();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  } //se pone un trycatch para que en el caso que exista un error al ejecutar la función cuadradoPromise, el error lanzado por reject sea capturado
}

obtenerResultados();

//Top-Level await
/*const resultado = await cuadradoPromise(6);
console.log(resultado);*/

/*
async function funcionAsyncronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise("3");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {
    console.error(error);
  }
}

funcionAsyncronaDeclarada();

const funcionAsyncronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise("9");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {
    console.error(error);
  }
};

funcionAsyncronaExpresada();
*/
