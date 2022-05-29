let ArcoirisPrendido = false;
let lapizOscurecedorPrendido = false;
let squaresPerSide = 16;
let colorLapiz = "#d2691e";
let colorFondo = "#8a2be2";

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
                `background-color: ${colorFondo}; 
                width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`);
            gridSquare.addEventListener("mousedown", (event) => {
                event.preventDefault();
                if(event.which == 1) {
                    let rojo, verde, azul;
                    if(ArcoirisPrendido) {
                        rojo = Math.floor(Math.random() * 255);
                        verde = Math.floor(Math.random() * 255);
                        azul = Math.floor(Math.random() * 255);
                        gridSquare.setAttribute("style", 
                            `background-color: rgb(${rojo}, ${verde}, ${azul}); 
                            width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`);
                    } else if(lapizOscurecedorPrendido) {
                        let gridBackColor = event.target.style.backgroundColor;
                        gridBackColor = gridBackColor.split(",");
                        let rojo = parseInt(gridBackColor[0].slice(4)) - 25;
                        let verde = parseInt(gridBackColor[1]) - 25;
                        let azul = parseInt(gridBackColor[2]) - 25;
                        event.target.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
                    } else {
                        gridSquare.setAttribute("style", 
                            `background-color: ${colorLapiz}; 
                            width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`);
                        }
                }    
            });
            gridSquare.addEventListener("mouseenter", (event) => {
                if(event.which == 1) {
                    let rojo, verde, azul;
                    if(ArcoirisPrendido) {
                        rojo = Math.floor(Math.random() * 255);
                        verde = Math.floor(Math.random() * 255);
                        azul = Math.floor(Math.random() * 255);
                        gridSquare.setAttribute("style", 
                            `background-color: rgb(${rojo}, ${verde}, ${azul}); 
                            width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`);
                    } else if(lapizOscurecedorPrendido) {
                        let gridBackColor = event.target.style.backgroundColor;
                        console.log(gridBackColor);
                        gridBackColor = gridBackColor.split(",");
                        let rojo = parseInt(gridBackColor[0].slice(4)) - 25;
                        let verde = parseInt(gridBackColor[1]) - 25;
                        let azul = parseInt(gridBackColor[2]) - 25;
                        event.target.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
                    } else {
                        gridSquare.setAttribute("style", 
                            `background-color: ${colorLapiz}; 
                            width: ${squareSideWidthNumber}vmin; height: ${squareSideWidthNumber}vmin;`);
                        }
                }    
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

function lapizOscurecedor() {
    let cuerpa = document.querySelector("body");
    cuerpa.removeChild(mainDiv);
    lapizOscurecedorPrendido = !lapizOscurecedorPrendido;
    colorFondoR = parseInt(colorFondo.slice(1,3), 16);
    colorFondoG = parseInt(colorFondo.slice(3,5), 16);
    colorFondoB = parseInt(colorFondo.slice(5), 16);
    nuevaHoja(squaresPerSide);
}

function nuevoColorLapiz() {
    colorLapiz = event.target.value;
    let cuerpa = document.querySelector("body");
    cuerpa.removeChild(mainDiv);
    nuevaHoja(squaresPerSide);
}

function nuevoColorFondo() {
    colorFondo = event.target.value;
    let cuerpa = document.querySelector("body");
    cuerpa.removeChild(mainDiv);
    nuevaHoja(squaresPerSide);
}

let botonNuevaHoja = document.querySelector("#NuevaHoja");
botonNuevaHoja.addEventListener("click", cambiarCantidadPixeles);

let botonArcoiris = document.querySelector("#Arcoiris");
botonArcoiris.addEventListener("click", Arcoiris);

let botonOscurecedor = document.querySelector("#Oscurecedor");
botonOscurecedor.addEventListener("click", lapizOscurecedor);

let seleccionadorColorLapiz = document.querySelector("#colorLapiz");
seleccionadorColorLapiz.addEventListener("input", nuevoColorLapiz);

let seleccionadorColorFondo = document.querySelector("#colorFondo");
seleccionadorColorFondo.addEventListener("input", nuevoColorFondo);