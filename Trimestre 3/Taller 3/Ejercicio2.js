// 2. Ejercicio de Empleados en una Empresa: Define una clase base
// Empleado que contenga propiedades como nombre y salario. Crea tres
// clases hijas: Gerente, Desarrollador y Vendedor, que hereden de Empleado
// y agreguen propiedades específicas (como departamento para Gerente,
// lenguajes para Desarrollador, y ventasMensuales para Vendedor). Crea
// instancias de cada clase y muestra sus detalles.

class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    mostrarInfo() {
      return `Empleado: ${this.nombre}, Salario: $${this.salario}`;
    }
  }
  
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      super(nombre, salario);
      this.departamento = departamento;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Departamento: ${this.departamento}`;
    }
  }
  
  class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguajes) {
      super(nombre, salario);
      this.lenguajes = lenguajes;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Lenguajes: ${this.lenguajes.join(", ")}`;
    }
  }
  
  class Vendedor extends Empleado {
    constructor(nombre, salario, ventasMensuales) {
      super(nombre, salario);
      this.ventasMensuales = ventasMensuales;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Ventas Mensuales: ${this.ventasMensuales}`;
    }
  }
  
  //define e imprime
  const gerente = new Gerente("Vicky", 10000000, "CEO");
  const desarrollador = new Desarrollador("Tory", 12000000, ["Dart", "Python"]);
  const vendedor = new Vendedor("Oreo", 5000000, 500);
  
  console.log(gerente.mostrarInfo());
  console.log(desarrollador.mostrarInfo());
  console.log(vendedor.mostrarInfo());
  