const mainDiv = document.querySelector("#mainDiv");
let squaresPerSide = 64;


for (let i = 1; i < squaresPerSide + 1; i++) {
    const horizontalDiv = document.createElement("div");
    horizontalDiv.classList.add("horizontalDiv");
    
    for (let i = 1; i < squaresPerSide + 1; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("style", 
            "background-color:blueviolet; width: 1.42vmin; height: 1.42vmin;");
        gridSquare.addEventListener("mouseover", () => {gridSquare.setAttribute("style", 
            "background-color:chocolate; width: 1.42vmin; height: 1.42vmin;")});
        // gridSquare.textContent = "0";
        horizontalDiv.appendChild(gridSquare);
    }

    mainDiv.appendChild(horizontalDiv);
};