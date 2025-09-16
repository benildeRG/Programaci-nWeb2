/*
saludar();
function saludar(){
    console.log("Hola mundo desde una funcion");
}

/*
console.log(saludar);
saludar;
saludar();
saludar("Saludar");
console.log(function saludar());
console.log(function saludar);
*/

function saludo(nombreUsuario){
    //console.log("Hola como estas " + nombreUsuario);
    alert ("Hola como estas? " + nombreUsuario);

}

saludo("Benilde");

let nombre = prompt("Nombre");
saludo(nombre);
//alert() 