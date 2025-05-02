 // persona

//se cra la clase
class Rectangulo{
    #largo;
    #ancho;

// inicia los atributos del objeto
    constructor(largo, ancho){
        this.#largo = largo;
        this.#ancho = ancho;
  
    }
//imprime la info
    calcularArea(){
        return this.#largo * this.#ancho;
    }

    calcularPerimetro(){
        return 2 * (this.#largo + this.#ancho);
    }
}
//instancia: crea objetos

const Rectangulo1 = new Rectangulo(5,8);

//muestra la instanca

console.log("Area :", Rectangulo1.calcularArea());
console.log("Perimetro:", Rectangulo1.calcularPerimetro());
