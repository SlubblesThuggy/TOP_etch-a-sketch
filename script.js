const containerDiv = document.querySelector("#container");
const generateButton = document.querySelector("#generate");

function generateBoard(size) {
    // remove old board (should there be one)
    while (containerDiv.lastElementChild) {
        containerDiv.removeChild(containerDiv.lastElementChild);
    }

    // generate new board
    for (let row = 0; row < size; row++) {
        let gridRowDiv = document.createElement("div");
        gridRowDiv.className = "grid-row";

        containerDiv.appendChild(gridRowDiv);

        for (let col = 0; col < size; col++) {
            let gridCellDiv = document.createElement("div");
            gridCellDiv.className = "grid-cell";
            gridCellDiv.addEventListener("mouseenter", (event) => 
                event.target.style.backgroundColor = "black"
            );

            gridRowDiv.appendChild(gridCellDiv);
        }
    }
}

function onGridCellMouseEnter(event) {
}

generateButton.addEventListener("click", () => {
    let size = prompt("Enter size: ", 16);

    if (isNaN(size) || size <= 0) return;

    if (size > 100) {
        console.error("Size mustn't exceed 100.");
        return;
    }

    generateBoard(size);
});

generateBoard(16);