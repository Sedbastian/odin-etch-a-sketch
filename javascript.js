function nuevaHoja() {
    squaresPerSide = parseInt(prompt("¿Cuantos pixeles por lado?", "16"));
    let cuerpa = document.querySelector("body");
    // cuerpa.removeChild(mainDiv);
    // Funcion
    let squareSide = (100 / squaresPerSide) * .91;
    let squareSideWidthString = squareSide.toFixed(2);
    let squareSideWidthNumber = parseFloat(squareSideWidthString);

    mainDiv = document.createElement("div");
    mainDiv.setAttribute("style", "display: flex;");
    let cuerpi = document.querySelector("body");
    cuerpi.appendChild(mainDiv);

    console.log(squaresPerSide);
    console.log(squareSideWidthNumber);

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
            // gridSquare.textContent = "0";
            horizontalDiv.appendChild(gridSquare);
        }
        mainDiv.appendChild(horizontalDiv);
    };
};

let boton = document.querySelector("button");
boton.addEventListener("click", nuevaHoja);