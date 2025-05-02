function calcularIMC(){
    event.preventDefault();
    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseInt(document.getElementById('altura').value);

    if (isNaN(peso) && isNaN(altura) || peso <= 0 || altura <= 0){
        console.log("Ingrese los datos correctamente");

    }

    imc = peso /(altura * altura);
    switch (true){
        case (imc < 18.5):
            console.log("Bajo de peso");
            break;

        case (imc < 18.5 && imc<= 24.9):
            console.log("Peso normal");
            break;
        
        case (imc < 18.5 && imc<= 29.9):
            console.log("Bajo de peso");
            break;
        
        default:
            console.log("Obesidad")
            break;  
            
    }

    }