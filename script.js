const containerDiv = document.querySelector("#container");

function generateBoard(width, height) {
    for (let row = 0; row < height; row++) {
        let gridRowDiv = document.createElement("div");
        gridRowDiv.className = "grid-row";
        containerDiv.appendChild(gridRowDiv);

        for (let col = 0; col < width; col++) {
            let gridCellDiv = document.createElement("div");
            gridCellDiv.className = "grid-cell";
            gridCellDiv.addEventListener("mouseenter", onGridCellMouseEnter);
            gridRowDiv.appendChild(gridCellDiv);
        }
    }
}

function onGridCellMouseEnter(event) {
    event.target.style.backgroundColor = "black";
}

generateBoard(16, 16);