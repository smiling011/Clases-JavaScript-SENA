class Rectangulo {
    // largo;
    // ancho;

    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    get largo() {
        return this._largo;
    }

    set largo(valor) {
        if (valor > 0){
            this._largo = valor;
        } else {
            console.log("Error: el lago debe ser un numero positivo");
        }
    }
    
    get ancho() {
        return this._ancho;
    }

    set ancho(valor) {
        if (valor > 0){
            this._ancho = valor;
        } else {
            console.log("Error: el lago debe ser un numero positivo");
        }
    }

    calcularArea() {
        return this.largo * this.ancho;
    }

    calcularPerimetro() {
        return 2 * (this.largo + this.ancho);
    }
}

let  rectangulo1 = new Rectangulo(10,5);

console.log(`Area: ${rectangulo1.calcularArea()}`)
console.log(`Perimetro: ${rectangulo1.calcularPerimetro()}`)

rectangulo1.ancho = 8;
console.log(`Nuevo ancho: ${rectangulo1.ancho}`);
console.log(`Nuevo Area: ${rectangulo1.calcularArea()}`);
console.log(`Nuevo Perimetro: ${rectangulo1.calcularPerimetro()}`);
