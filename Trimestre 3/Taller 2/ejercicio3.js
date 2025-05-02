  // persona

//se cra la clase
class Empleado{
    #nombre;
    #sueldoBase;

// inicia los atributos del objeto
    constructor(nombre, sueldoBase) {
        this.#nombre = nombre;
        this.#sueldoBase = sueldoBase;
    }
//imprime la info
    calcularSalario(){
        let salario = this.#sueldoBase;
        if (this.#sueldoBase > 1000) {
            salario += this.#sueldoBase * 0.1; 
        }
        return salario;
    }
}
//instancia: crea objetos

const Empleado1 = new Empleado("Vicky", 1200);

//muestra la instanca

console.log("Salario:", Empleado1.calcularSalario());
