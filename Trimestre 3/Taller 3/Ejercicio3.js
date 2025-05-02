// 3. Ejercicio de Instrumentos Musicales: Crea una clase base llamada
// Instrumento con propiedades como nombre y tipo. Luego, crea tres clases
// hijas: Guitarra, Piano y Batería, que hereden de Instrumento y sobrescriban
// un método tocar() que imprima un mensaje indicando que el instrumento
// suena. Crea instancias de cada clase y llama al método tocar().

class Instrumento {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    tocar() {
      return `${this.nombre} esta sonando.`;
    }
  }
  
  class Guitarra extends Instrumento {
    tocar() {
      return `${this.nombre}, la guitarra suena.`;
    }
  }
  
  class Piano extends Instrumento {
    tocar() {
      return `${this.nombre}, el piano suena`;
    }
  }
  
  class Bateria extends Instrumento {
    tocar() {
      return `${this.nombre}, la bateria suena.`;
    }
  }
  
  //define e imprime
  const guitarra = new Guitarra("Guitarra", "Cuerda");
  const piano = new Piano("Piano", "Tecla");
  const bateria = new Bateria("Bateria", "Tambor");
  
  console.log(guitarra.tocar());
  console.log(piano.tocar());
  console.log(bateria.tocar());
  