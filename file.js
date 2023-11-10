const gridContainer = document.querySelector('.grid-container');
const main = document.querySelector('.main');
const containerDimensions = gridContainer.clientHeight;
console.log(`container height: ${containerDimensions}`)

//create prompt button
const promptBtn = document.createElement('button');
promptBtn.className = 'prompt-btn';
promptBtn.textContent = 'Create Grid';
main.appendChild(promptBtn);

//clear grid to avoid stacking
function clearGrid () {
    gridContainer.innerHTML = '';
}

//create prompt
function createGrid () {
    clearGrid();
    //get grid size
    let gridNumber;
    
    do {
        gridNumber = prompt("Pick a number between 10 and 100");
        console.log(`gridNumber: ${gridNumber}`);
    } while (isNaN(gridNumber) || gridNumber <  10 || gridNumber > 100);

    //add grid to DOM
    const gridSize = gridNumber * gridNumber;
    console.log(`gridsize: ${gridSize}`);
    function generateGrid () {
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cellWidthHeight = `${containerDimensions/gridNumber}`
            console.log(cellWidthHeight)
            cell.style.width = `${cellWidthHeight}px`;
            cell.style.height = `${cellWidthHeight}px`;
            cell.addEventListener('mouseenter', function () {
                cell.style.backgroundColor = "red";
            })
            gridContainer.appendChild(cell);
        }
    }

    generateGrid();
    
}

promptBtn.addEventListener('click', ()=> createGrid());
