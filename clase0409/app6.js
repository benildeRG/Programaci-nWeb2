function divicion (n1, n2){
    return parseInt (n1) / parseInt(n2);
}

let numero1 = prompt("numero 1: ");
let numero2 = prompt("numero 2: ");

let resultado = divicion(numero1, numero2);
console.log("El total de la divicion es: " + resultado);

//que diga que no se puede dividir entre 0
if (numero1/0){
    console.log("ERROR")
}