 // Venta
 //se cra la clase
class Venta {
    #producto; 
    #cantidadVendida;
    #precioUnitario;

    // inicia los atributos del objeto
    constructor(producto, cantidadVendida, precioUnitario) {
        this.#producto = producto;
        this.#cantidadVendida = cantidadVendida;
        this.#precioUnitario = precioUnitario;
    }

    //imprime la infoa
    calcularTotal() {
        return this.#cantidadVendida * this.#precioUnitario;
    }
}

//instancia: crea objetos
const venta1 = new Venta("teclado", 3, 25);

//muestra la instanca
console.log("Total de la venta:", venta1.calcularTotal());
