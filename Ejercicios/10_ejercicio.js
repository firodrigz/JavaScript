/*Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. 
Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:
- Un objeto con la información del fondo marino
- Una cadena de texto con el nombre del lugar que queremos explorar
- Una cadena de texto con el nombre del objeto que queremos encontrar
Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. 
Así que intentaríamos acceder a ocean.deep.treasure.
Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. 
Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.*/

function searchInOcean(ocean, section, item) {
  const resultado = ocean?.[section]?.[item];
  let devolver;
  if (resultado !== undefined && resultado !== null) {
    devolver = true;
  } else {
    devolver = false;
  }
  return devolver;
}
