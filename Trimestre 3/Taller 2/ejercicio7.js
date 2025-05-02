 // Se crea la clas
class Pelicula {
    #titulo;
    #director;
    #duracion;

    // inicia los atributos del objeto
    constructor(titulo, director, duracion) {
        this.#titulo = titulo;
        this.#director = director;
        this.#duracion = duracion;
    }

    //imprime la infoa
    mostrarDetalles() {
        console.log(`Titulo: ${this.#titulo}`);
        console.log(`Director: ${this.#director}`);
        console.log(`Duracion: ${this.#duracion} minutos`);
    }

    esExtensa() {
        return this.#duracion > 120;
    }
}

//instancia: crea objetos
const pelicula1 = new Pelicula("Las flipantes aventuras de dacky", "Vicky y David", 148);

//muestra la instanca
pelicula1.mostrarDetalles();
console.log("Es extensa?", pelicula1.esExtensa());
