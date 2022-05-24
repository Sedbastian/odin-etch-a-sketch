const mainDiv = document.querySelector("#mainDiv");
let squaresPerSide = 16;


for (let i = 1; i < squaresPerSide + 1; i++) {
    const horizontalDiv = document.createElement("div");
    horizontalDiv.classList.add("horizontalDiv");
    
    for (let i = 1; i < squaresPerSide + 1; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.addEventListener("mouseover", () => {gridSquare.classList.add("hovered")});
        gridSquare.textContent = "0";
        horizontalDiv.appendChild(gridSquare);
    }

    mainDiv.appendChild(horizontalDiv);
};