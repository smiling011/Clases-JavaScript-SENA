// Cuenta
class Cuenta {
    #titular;
    #saldo;

    // constructor 
    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = saldo;
    }

    // para depositar 
    depositar(cantidad) {
        this.#saldo += cantidad;
    }

    //  para retirar 
    retirar(cantidad) {
        if (cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
        } else {
            console.log("Fondos insuficientes.");
        }
    }

    // saldo actual
    obtenerSaldo() {
        return this.#saldo;
    }
}

//defin
const cuenta1 = new Cuenta("Vicky", 1500);


cuenta1.depositar(500);  
cuenta1.retirar(200);    
cuenta1.retirar(1000);   
 

// Imprime el saldo final
console.log("Saldo final:", cuenta1.obtenerSaldo());
