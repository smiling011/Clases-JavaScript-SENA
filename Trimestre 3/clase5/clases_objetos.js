// persona

//se cra la clase
class Persona{
    nombre;
    edad;
    genero;
    intereses = new Array();
    
// inicia los atributos del objeto
    constructor(nombre, edad, genero, intereses){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.intereses = intereses;
    }
//imprime la info
    mostrarDetalles(){
        return`Nombre: ${this.nombre} \n Edad: ${this.edad} 
        \n Genero: ${this.genero} \n Intereses: ${this.intereses}`;
    }

}
//instancia: crea objetos

let persona1 = new Persona("Vicky", 19,"Femenino",
    ['ballet','programacion','musica']
);
//muestra la instanca
console.log(persona1.mostrarDetalles());