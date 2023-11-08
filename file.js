const gridContainer = document.querySelector('.grid-container');

const number = 72;

//Add boxes to the container
function createBoxes() {
    for(let i = 0; i < number; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        gridContainer.appendChild(box);
        // make boxes interactive
        box.addEventListener('mouseenter', ()=> {
            box.style.backgroundColor="red";
        })
    }
}
createBoxes();

//find box dimensions relative to the container
const boxes = document.querySelectorAll(".box")

function getBoxSize () {
    boxes.forEach( (box) => {
        const gridContainerArea = gridContainer.clientHeight * gridContainer.clientWidth;
        console.log(gridContainerArea);
        const boxWidthHeight = Math.sqrt(gridContainerArea/number);
        console.log(boxWidthHeight);    box.style.width = `${boxWidthHeight}px`;

        box.style.width = `${boxWidthHeight}px`;
        box.style.height = `${boxWidthHeight}px`;    
    })
}

getBoxSize();









