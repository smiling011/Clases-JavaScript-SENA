let  topping = prompt("Que topping deseas agregar");
let precio; 
let helado = 2.0;
let precioFinal;

topping == "oreo" ? precio = 1 :
topping == "kitkat" ? precio = 1.5 :
topping == "brownie" ? precio = 0.75 :
topping == "chocolate" ? precio = 0.95 :
precio = 0;

precioFinal = helado + precio;
document.write(`<strong>Valor a pagar: </strong> ${precioFinal.toFixed(2)} euros`);

