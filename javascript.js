function operaciones(){

    var primerNumero = parseFloat(document.getElementById("primerNumero").velue);
    var segundoNumero = parseFloat(document.getElementById("segundoNumero").velue);

    var suma = primerNumero + segundoNumero;
    var resta = primerNumero - segundoNumero;
    var multiplicacion = primerNumero * segundoNumero;
    var division = primerNumero / segundoNumero;
    var mod = primerNumero % segundoNumero;


//Opcion 1
// console.log(`Suma: ${primerNumero + segundoNumero}`);

    console.log(`Suma: ${suma}\nresta: ${resta}\nMultiplicacion: ${multiplicacion}\nDivision: ${division}\nModulo: ${mod}`);
}