let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let num3 = parseInt(prompt("Ingresa el tercer numero"));

let mayor, menor;

if (num1 >= num2 && num1 >= num3){
    mayor = num1;
}else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

if (num1 <= num2 && num1 <= num3){
    menor = num1;
}else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
} else {
    menor = num3;
}

if (num1 === num2 && num2 === num3) {
    console.log("Todos los numeros son iguales");
}else{
    console.log("El numero mayor es " + mayor + " y el numero menor es " + menor);
}
