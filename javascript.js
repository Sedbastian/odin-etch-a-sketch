let squaresPerSide = 64;
let squareSide = (100 / squaresPerSide) * .91;
let squareSideWidthString = squareSide.toFixed(2);
let squareSideWidthNumber = parseFloat(squareSideWidthString);
console.log(squareSideWidthNumber);

// function nuevaHoja() {
    
// };

const boton = document.querySelector("button");
// boton.addEventListener("click", nuevaHoja);
const mainDiv = document.querySelector("#mainDiv");


for (let i = 1; i < squaresPerSide + 1; i++) {
    const horizontalDiv = document.createElement("div");
    horizontalDiv.classList.add("horizontalDiv");
    
    for (let i = 1; i < squaresPerSide + 1; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
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