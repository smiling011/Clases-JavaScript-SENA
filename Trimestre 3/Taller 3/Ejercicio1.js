// 1. Ejercicio de Productos en una Tienda: Crea una clase base llamada
// Producto con propiedades como nombre, precio y un método mostrarInfo().
// Luego, crea tres clases hijas: Electronico, Ropa y Alimento, que hereden de
// Producto y agreguen propiedades específicas (como garantia para
// Electronico, talla para Ropa, y fechaCaducidad para Alimento). Crea
// instancias de cada clase y muestra la información de cada producto.

// clase1
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    mostrarInfo() {
      return `Producto: ${this.nombre}, Precio: $${this.precio}`;
    }
  }
// 2clase
  class Electronico extends Producto {
    constructor(nombre, precio, garantia) {
      super(nombre, precio);
      this.garantia = garantia;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Garantia: ${this.garantia} años`;
    }
  }
  
//   clase3
  class Ropa extends Producto {
    constructor(nombre, precio, talla) {
      super(nombre, precio);
      this.talla = talla;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Talla: ${this.talla}`;
    }
  }
  

//   clase4
  class Alimento extends Producto {
    constructor(nombre, precio, fechaCaducidad) {
      super(nombre, precio);
      this.fechaCaducidad = fechaCaducidad;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Fecha de Caducidad: ${this.fechaCaducidad}`;
    }
  }
  

  //define e imprime
  const pc = new Electronico("PC gamer", 10000000, 2);
  const bolso = new Ropa("birkin bag", 50000, "l");
  const oreo = new Alimento("Oreos", 1.5, "2024-12-01");
  
  console.log(pc.mostrarInfo());
  console.log(bolso.mostrarInfo());
  console.log(oreo.mostrarInfo());
  