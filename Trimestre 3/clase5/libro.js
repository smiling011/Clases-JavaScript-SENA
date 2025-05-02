// persona

//se cra la clase
class Libro{
    titulo;
    autor;
    numeroPaginas;
    
    
// inicia los atributos del objeto
    constructor(titulo, autor, numeroPaginas){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
   
    }
//imprime la info
    mostrarDetalles(){
        return`titulo: ${this.titulo} \n autor: ${this.autor}`;
    }

    obtenerNumeroPaginas(){
        return`numeroPaginas: ${this.numeroPaginas}`;
    }

}
//instancia: crea objetos

let libro1 = new Libro("Las flipantes aventuras de Dacky", "tory Vielma", 500);
// let paginasLibro1 = new Libro();

//muestra la instanca
console.log(libro1.mostrarDetalles());
console.log(paginasLibro1.obtenerNumeroPaginas());