function resta (n1, n2){
    return parseInt (n1) - parseInt(n2);
}

let numero1 = prompt("numero 1: ");
let numero2 = prompt("numero 2: ");

let resultado = resta(numero1, numero2);
console.log("El total de la resta es: " + resultado);
