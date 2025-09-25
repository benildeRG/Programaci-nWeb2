//FUNCION DECLARATIVA
function  numeroAleatorio(min, max){ 
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(numeroAleatorio(1,11));

//FUNCION EXPRESADA

const miNumero = function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(miNumero(2,30));