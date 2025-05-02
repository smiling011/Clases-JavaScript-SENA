// 4. Ejercicio de Juegos de Mesa: Define una clase base Juego con
// propiedades como nombre y numeroDeJugadores. Crea tres clases hijas:
// JuegoDeCartas, JuegoDeTablero y JuegoDeRol, que hereden de Juego y
// agreguen propiedades específicas (como tipoDeCartas para
// JuegoDeCartas, material para JuegoDeTablero, y ambientacion para
// JuegoDeRol). Crea instancias de cada clase y muestra la información de
// cada juego.


// clase principal
class Juego {
    constructor(nombre, numeroDeJugadores) {
      this.nombre = nombre;
      this.numeroDeJugadores = numeroDeJugadores;
    }
  
    mostrarInfo() {
      return `Juego: ${this.nombre}, Jugadores: ${this.numeroDeJugadores}`;
    }
  }
//   clase1
  class JuegoDeCartas extends Juego {
    constructor(nombre, numeroDeJugadores, tipoDeCartas) {
      super(nombre, numeroDeJugadores);
      this.tipoDeCartas = tipoDeCartas;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Tipo de Cartas: ${this.tipoDeCartas}`;
    }
  }
  clase
  //   clase2
  class JuegoDeTablero extends Juego {
    constructor(nombre, numeroDeJugadores, material) {
      super(nombre, numeroDeJugadores);
      this.material = material;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Material: ${this.material}`;
    }
  }

//   clase3
  class JuegoDeRol extends Juego {
    constructor(nombre, numeroDeJugadores, ambientacion) {
      super(nombre, numeroDeJugadores);
      this.ambientacion = ambientacion;
    }
  
    mostrarInfo() {
      return `${super.mostrarInfo()}, Ambientacion: ${this.ambientacion}`;
    }
  }
  
  //define e imprime
  const cartas = new JuegoDeCartas("Guerra", 2, "Baraja comun");
  const tablero = new JuegoDeTablero("Ajedrez", 2, "Madera");
  const rol = new JuegoDeRol("Calabozos y Dragones", 4, "Fantasia y aventura");
  
  console.log(cartas.mostrarInfo());
  console.log(tablero.mostrarInfo());
  console.log(rol.mostrarInfo());
  