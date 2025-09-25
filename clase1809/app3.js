/*
var miCarro = new Object();
miCarro.marca = 'Toyota';
miCarro.modelo = 'Supra';
miCarro.color = 'Rojo';

console.log(miCarro);
*/

//Ejemplo de un arreglo no es lo mismo que objeto
/*
let frutas [banana, mango, manzana];
console.log(frutas);

*/

var miCarro = {
    marca: 'Toyota',
    modelo: 'Supra',
    color: 'Rojo'
}

console.log(miCarro);

var perro = {
    nombre: 'Shayla',
    color: 'Sal pimienta',
    edad: 28,
    talla: 'mediana',
    enemmigos: ["otro perro", "gatos","baños"]
}



//console.log(perro.color);
//console.log(perro.enemmigos[1]);
//agregar
perro.raza = 'schnauzer';       

console.log(perro);

//leer
console.log(perro.edad);

//actualizar
perro.edad = 35;
console.log(perro.edad);

//eliminar
delete perro.edad;
console.log(perro);
