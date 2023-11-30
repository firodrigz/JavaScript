//Temporizadores (setTimeout & setInterval)
// Ambos reciben una callback y un tiempo expresado en milisegundos
//setTimeout
//setInverval

let temporizador = setTimeout(() => {
  console.log(
    "Ejecutando un setTimeout, esto se ejecuta una sola vez después del periodo de tiempo"
  );
}, 4000);

clearTimeout(temporizador);

let repeticionIntervalos = setInterval(() => {
  console.log(
    "Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo"
  );
}, 500);

clearInterval(repeticionIntervalos);

let reloj = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(reloj);

/* La asincronía es uno de los pilares fundamentales de js ya que es un lenguaje de single thread
   No se pueden realizar operaciones largas como el acceso a la red sin que se bloquee el hilo principal
   Ante esta problemática entra en juego la asincronía
   
   Procesamiento Single thread y Multi thread
   Operaciones de CPU y Operaciones de I / O
   Operaciones Concurrentes y Paralelas
   Operaciones Bloqueantes y no bloqueantes
   Operaciones Síncronas y Asíncronas
   Event loop

   Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo
   hijo, (single thread) para operaciones de entrada y salida (input/ouput)
*/

// Código Síncrono bloqueante
(() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})()


  // Código Asíncrono no bloqueante
(() => {
    console.log("Código Asíncrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function () {
        console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(function () {
        console.log("Uno");
        }, 0);

        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();

//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D