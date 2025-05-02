// 5. Ejercicio de Dispositivos Electrónicos: Crea una clase base Dispositivo
// con propiedades como nombre y marca. Luego, crea tres clases hijas:
// Telefono, Computadora y Tablet, que hereden de Dispositivo y agreguen
// propiedades específicas (como sistemaOperativo para Telefono, ram para
// Computadora, y tamanoPantalla para Tablet). Crea instancias de cada
// clase y muestra sus detalles.

// clase principal
class Dispositivo {
    constructor(nombre, marca) {
      this.nombre = nombre;
      this.marca = marca;
    }
  
    mostrarInfo() {
      return `Dispositivo: ${this.nombre}, Marca: ${this.marca}`;
    }
  }

// clase 1
  class Telefono extends Dispositivo {
    constructor(nombre, marca, sistemaOperativo) {
      super(nombre, marca);
      this.sistemaOperativo = sistemaOperativo;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Sistema Operativo: ${this.sistemaOperativo}`;
    }
  }
// clase2
  class Computadora extends Dispositivo {
    constructor(nombre, marca, ram) {
      super(nombre, marca);
      this.ram = ram;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, RAM: ${this.ram} GB`;
    }
  }


// clase3
  class Tablet extends Dispositivo {
    constructor(nombre, marca, tamanoPantalla) {
      super(nombre, marca);
      this.tamanoPantalla = tamanoPantalla;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Tamaño Pantalla: ${this.tamanoPantalla}`;
    }
  }
  
  //define e imprime
  const telefono = new Telefono("iPhone 20", "Apple", "iOS");
  const computadora = new Computadora("Laptop Lenovo", "Lenovo", 34);
  const tablet = new Tablet("iPad 20 pro max", "Apple", 15);
  
  console.log(telefono.mostrarInfo());
  console.log(computadora.mostrarInfo());
  console.log(tablet.mostrarInfo());
  