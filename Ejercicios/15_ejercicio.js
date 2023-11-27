/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {
  constructor(objetoDatos) {
    const { id, titulo, director, anioEstreno, origen, generos, calificacion } =
      objetoDatos;

    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.origen = origen;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(anioEstreno);
    this.validarPaises(origen);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.log(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} ${valor} está vacío`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} ${valor} ingresado NO es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} ${valor} excede el número de caracteres máximos ${longitud}`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} ${valor} está vacío`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} ${valor} ingresado NO es una cadena de texto`
      );

    return true;
  }

  validarArray(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} ${valor} está vacío`);
    if (!(valor instanceof Array))
      return console.error(`${propiedad} ${valor} ingresado NO es un array`);
    if (valor.length === 0)
      return console.error(`${propiedad} ${valor} no tiene datos`);
    for (let elemento of valor) {
      if (!this.validarCadena(propiedad, elemento)) {
        return false;
      }
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id) === true) {
      if (!/^([a-z]){2}([0-9]{7})$/.test(id)) {
        return console.error(
          `IMDB id ${id} no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo) === true) {
      this.validarLongitudCadena("Título", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director) === true) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(anioEstreno) {
    if (this.validarNumero("Año de estreno", anioEstreno) === true) {
      if (!/^([0-9]){4}$/.test(anioEstreno)) {
        return console.error(
          `Año de estreno ${anioEstreno} no es válido, debe ser un número de 4 dígitos`
        );
      }
    }
  }

  validarPaises(origen) {
    this.validarArray("Países", origen);
  }

  validarGeneros(generos) {
    if (this.validarArray("Generos", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`${genero} NO pertenece a la lista de permitidos`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion) === true) {
      return calificacion < 0 || calificacion > 10
        ? console.error("La calificación debe estar entre un rango de 0 y 10")
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica: \nTítulo: ${this.titulo} \nDirector: ${
        this.director
      } \nAño: ${this.anioEstreno} \nPaís: ${this.origen.join(
        "-"
      )} \nGéneros: ${this.generos.join(", ")} \nCalificación: ${
        this.calificacion
      } \nIMDB id: ${this.id}`
    );
  }
}

//Pelicula.generosAceptados()

/*const peli = new Pelicula({
  id: "tt2556455",
  titulo: "La isla secreta",
  director: "Arnold Schwarzenegger",
  anioEstreno: 2023,
  origen: ["Argentina"],
  generos: ["War"],
  calificacion: 9.8,
});

peli.fichaTecnica();*/

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    anioEstreno: 2007,
    origen: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    anioEstreno: 2006,
    origen: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    anioEstreno: 2008,
    origen: ["USA", "UK"],
    generos: ["Action", "Drama", "Crime"],
    calificacion: 9.5,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
