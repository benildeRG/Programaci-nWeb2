//Espera a que se cargue el html
document.addEventListener("DOMContentLoaded",()=>{
    //SELECCIONA TODAS LAS CELDAS DEL TABLERO
    const celdas = document.querySelectorAll(".celda");
    //SE MOSTRARA EL RESULTADO
    const resultado = document.getElementById("resultado");

    //FUNCIONAN LOS BOTONES 
    const startBtn = document.getElementById("start");
    const finishBtn = document.getElementById("finish");
    const restartBt = document.getElementById("restart");

    //LA X LE DA COMIENZO AL JUEGO
    let turno = "1"

    //VER SI EL JUEGO ESTA ACTIVO O AUN NO
    let juegoActivo = false;

    //iniciacion de las celdas 
    celdas.forEach(celda =>{
        celda.disabled = true;
    })

    //habilitar botones
    startBtn.addEventListener("click", ()=> {
        juegoActivo = true;
        turno = "1";
        resultado.textContent = " Turno del jugador 1"; 

        celdas.forEach(celda =>{
            celda.disabled = false;
            celda.value = "";
        });
    });

    //BOTON FINISH
    finishBtn.addEventListener("click", ()=>{
        juegoActivo = false;

        celdas.forEach(celda => celda.disabled = true);
        resultado.textContent = "Juego ha finalizado";
    });

    //BOTON RESTARR
    restartBt.addEventListener("click", ()=>{
        juegoActivo = false;
        celdas.forEach(celda =>{
            celda.value = "";
        });
    
    resultado.textContent = "";
    })
      // FUNCION DE CELDAS 
    // A cada celda le agregamos una función que se ejecuta cuando el jugador elige X o O
    celdas.forEach((celda, index) => {
        celda.addEventListener("change", () => {

            // Si el juego no está activo o la celda quedó vacía, no hace nada
            if (!juegoActivo || celda.value === "") return;

            // Una vez que una celda se usa, ya no se puede volver a cambiar
            celda.disabled = true;

            // Verifica si hay un ganador después de esta jugada
            if (verificarGanador()) {
                resultado.textContent = `¡Gana jugador ${turno}!`;
                juegoActivo = false;  // el juego termina
                celdas.forEach(c => c.disabled = true); // bloquea todas las celdas
            } 
            // Si no hay ganador, pero todas las celdas están llenas, es empate
            else if ([...celdas].every(c => c.value !== "")) {
                resultado.textContent = "¡EMPATE!";
                juegoActivo = false;
            } 
            // Si no hay ganador ni empate, cambia el turno al otro jugador
            else {
                turno = turno === "1" ? "2" : "1 ";
                resultado.textContent = `Turno del jugador ${turno}`;
            }
        });
    });

    // FUNCIÓN PARA VERIFICAR GANADOR 
    function verificarGanador() {
        // arreglo con los valores actuales de las 9 celdas
        const valores = [...celdas].map(c => c.value);

        // combinaciones que dan la victoria (filas, columnas, diagonales)
        const combinacionesGanadoras = [
            [0,1,2], // primera fila
            [3,4,5], // segunda fila
            [6,7,8], // tercera fila
            [0,3,6], // primera columna
            [1,4,7], // segunda columna
            [2,5,8], // tercera columna
            [0,4,8], // diagonal principal
            [2,4,6]  // diagonal inversa
        ];

        // combinaciones tiene 3 iguales (X o O
        return combinacionesGanadoras.some(([a,b,c]) =>
            valores[a] && valores[a] === valores[b] && valores[a] === valores[c]
        );
    }
})