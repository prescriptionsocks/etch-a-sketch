const gridContainer = document.querySelector('.grid-container');

let cellSize = 32;
let gridSize = cellSize*cellSize;
console.log(gridSize);

//get cell size
function getCellSize () {
    prompt("Pick a grid size between 1 and 100")
}


//create cells
function createCells () {
    for(let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.style.width = `${gridContainer.clientWidth/cellSize}px`;
        cell.style.height = `${gridContainer.clientWidth/cellSize}px`;

        //Add hover event to each cell
        cell.addEventListener('mouseenter', function(){
            cell.style.backgroundColor = 'red';
        })
        gridContainer.appendChild(cell);
    }
}

createCells();