const btn = document.querySelector('#btn');
const gridContainer = document.getElementById('gridContainer');



// setting up grid size
var size = 0;

// Creating x grid items

function storePrompt() {
    size = prompt('How many grids?');
    return size;
}

function alertGridSize() {
    if (size > 100) {
        alert('Cannot have grid size > 100');
        createGrid();
    } else if (size == '') {
        alert('Please select a non-null number');
        createGrid();
    }
}

// const randomRed = Math.floor(Math.random() * 256);
// const randomGreen = Math.floor(Math.random() * 256);
// const randomBlue = Math.floor(Math.random() * 256);

const randomRed = () => {
    let redVal = Math.floor(Math.random() * 256);
    return redVal;
}
const randomGreen = () => {
    let greenVal = Math.floor(Math.random() * 256);
    return greenVal;
}
const randomBlue = () => {
    let blueVal = Math.floor(Math.random() * 256);
    return blueVal;
}

let redBlueGreen = function changeColor(val) {

    if (val.target.style.backgroundColor == '') {
        val.target.style.backgroundColor = `rgb(${randomRed()}, ${randomGreen()}, ${randomBlue()})`;
    } else {
        return;
    }

}

function createGridItem() {
    let completeGrid = size * size;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < completeGrid; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        // gridItem.addEventListener('mouseover', redBlueGreen);
        gridItem.style.backgroundColor = 'null';
        gridContainer.appendChild(gridItem);
        gridItem.onmouseover = function(e) {
            redBlueGreen(e);
        }
    } 
}

function createGrid() {
    clearGrid();
    storePrompt();
    alertGridSize();
    createGridItem();
}

btn.addEventListener('click', createGrid);

// Clearing grid

const gridRefreshBtn = document.querySelector('#refreshGrid');

function clearGrid() {
    gridContainer.innerHTML = '';
}

gridRefreshBtn.addEventListener('click',clearGrid);