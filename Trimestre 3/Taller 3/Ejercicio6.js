// 6. Sistema de Biblioteca
// Descripción: Crea una clase base llamada Publicacion que contenga
// propiedades como titulo, autor y añoPublicacion. Luego, crea tres clases
// hijas: Libro, Revista y Articulo.
// Libro: Debe tener una propiedad adicional llamada numeroPaginas.
// Revista: Debe tener una propiedad adicional llamada frecuencia, que indica
// cuántas veces al año se publica.
// Articulo: Debe tener una propiedad adicional llamada url, que almacena el
// enlace donde se puede encontrar el artículo.

// Tareas:
// Implementa un método mostrarInfo() en la clase Publicacion que imprima la
// información básica de la publicación.
// Sobrescribe el método mostrarInfo() en cada clase hija para incluir sus
// propiedades específicas.
// Crea instancias de cada clase y muestra la información de cada publicación en
// la consola.

// clase pincipal
class Publicacion {
    constructor(titulo, autor, añoPublicacion) {
      this.titulo = titulo;
      this.autor = autor;
      this.añoPublicacion = añoPublicacion;
    }
  
    mostrarInfo() {
      return `Titulo: ${this.titulo}, Autor: ${this.autor}, Año: ${this.añoPublicacion}`;
    }
  }
//   clase1
  class Libro extends Publicacion {
    constructor(titulo, autor, añoPublicacion, numeroPaginas) {
      super(titulo, autor, añoPublicacion);
      this.numeroPaginas = numeroPaginas;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Paginas: ${this.numeroPaginas}`;
    }
  }

//   clase2
  class Revista extends Publicacion {
    constructor(titulo, autor, añoPublicacion, frecuencia) {
      super(titulo, autor, añoPublicacion);
      this.frecuencia = frecuencia;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Frecuencia: ${this.frecuencia}`;
    }
  }
  
  //   clase3
  class Articulo extends Publicacion {
    constructor(titulo, autor, añoPublicacion, url) {
      super(titulo, autor, añoPublicacion);
      this.url = url;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, URL: ${this.url}`;
    }
  }
  
 //define e imprime
  const libro = new Libro("venganza conta los dioses", "Bluey-Deep", 2021, 101);
  const revista = new Revista("Vogue", "Anne Wintour", 2024, 1000000);
  const articulo = new Articulo("Gossip Girl", "chica indiscreta", 2024, "www.xoxogossipgirl.com");
  
  console.log(libro.mostrarInfo());
  console.log(revista.mostrarInfo());
  console.log(articulo.mostrarInfo());
  