 // persona

//se cra la clase
class Persona{
    nombre;
    telefono;
    edad;
    
    
// inicia los atributos del objeto
    constructor(nombre, telefono, edad){
        this.nombre = nombre;
        this.telefono = telefono;
        this.edad = edad;
   
    }
//imprime la info
    mostrarDatos(){
        return`nombre: ${this.nombre} \n telefono: ${this.telefono} \n edad: ${this.edad}`;
    }
}
//instancia: crea objetos

let Persona1 = new Persona("vicky", 344235434, 19);

//muestra la instanca
console.log(Persona1.mostrarDatos());