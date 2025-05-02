 //crea la clase 
class Producto {
    #nombre;
    #precioSinIVA;

    // inicia los atributos del objeto
    constructor(nombre, precioSinIVA) {
        this.#nombre = nombre;
        this.#precioSinIVA = precioSinIVA;
    }

    //imprime la infoa
    calcularPrecioConIVA() {
        const iva = 0.19;
        return this.#precioSinIVA * (1 + iva);
    }
}

//instancia: crea objetos
const producto1 = new Producto("celular", 200);

//muestra la instanca
console.log("Precio con IVA:", producto1.calcularPrecioConIVA());
