let ArcoirisPrendido = false;
let squaresPerSide = 16;

function nuevaHoja(squaresPerSide) {
    let squareSide = (100 / squaresPerSide) * .91;
    let squareSideWidthString = squareSide.toFixed(2);
    let squareSideWidthNumber = parseFloat(squareSideWidthString);

    mainDiv = document.createElement("div");
    mainDiv.setAttribute("style", "display: flex; justify-content: center;");
    let cuerpi = document.querySelector("body");
    cuerpi.appendChild(mainDiv);

    for (let j = 1; j < squaresPerSide + 1; j++) {
        let horizontalDiv = document.createElement("div");
        horizontalDiv.setAttribute("style", "display: flex; flex-direction: column;");
        
            for (let i = 1; i < squaresPerSide + 1; i++) {
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("style", 
                `background-color:blueviolet; 
                width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`);
            gridSquare.addEventListener("mouseover", () => {
                let rojo, verde, azul;
                if(ArcoirisPrendido) {
                    rojo = Math.floor(Math.random() * 255);
                    verde = Math.floor(Math.random() * 255);
                    azul = Math.floor(Math.random() * 255);
                } else {
                    rojo = 210;
                    verde = 105;
                    azul = 30;
                    }
                gridSquare.setAttribute("style", 
                `background-color: rgb(${rojo}, ${verde}, ${azul}); 
                width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`)
                });

            horizontalDiv.appendChild(gridSquare);
        }
        mainDiv.appendChild(horizontalDiv);
    };
};

nuevaHoja(squaresPerSide);

function cambiarCantidadPixeles() {
    let cuerpa = document.querySelector("body");
    cuerpa.removeChild(mainDiv);
    squaresPerSide = parseInt(prompt("¿Cuantos pixeles por lado?", "16"));
    nuevaHoja(squaresPerSide);
};

function Arcoiris() {
    let cuerpa = document.querySelector("body");
    cuerpa.removeChild(mainDiv);
    ArcoirisPrendido = !ArcoirisPrendido;
    nuevaHoja(squaresPerSide);
}

let botonNuevaHoja = document.querySelector("#NuevaHoja");
botonNuevaHoja.addEventListener("click", cambiarCantidadPixeles);

let botonArcoiris = document.querySelector("#Arcoiris");
botonArcoiris.addEventListener("click", Arcoiris);