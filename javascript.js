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
            gridSquare.addEventListener("mouseover", () => {gridSquare.setAttribute("style", 
                `background-color:chocolate; 
                width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}2vmin;`)});
            horizontalDiv.appendChild(gridSquare);
        }
        mainDiv.appendChild(horizontalDiv);
    };
};

nuevaHoja(16);

function borrarYnuevaHoja() {
    let cuerpa = document.querySelector("body");
    cuerpa.removeChild(mainDiv);
    squaresPerSide = parseInt(prompt("¿Cuantos pixeles por lado?", "16"));
    nuevaHoja(squaresPerSide);
};

let boton = document.querySelector("button");
boton.addEventListener("click", borrarYnuevaHoja);