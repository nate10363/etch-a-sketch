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
    }
}

const randomRed = Math.floor(Math.random() * 256);
const randomGreen = Math.floor(Math.random() * 256);
const randomBlue = Math.floor(Math.random() * 256);

let redBlueGreen = function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}







function createGridItem() {
    let completeGrid = size * size;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < completeGrid; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', redBlueGreen);
        gridContainer.appendChild(gridItem);
    } 
}

function createGrid() {
    clearGrid();
    storePrompt();
    createGridItem();
    alertGridSize();
}

btn.addEventListener('click', createGrid);

// Clearing grid

const refreshGrid = document.querySelector('#refreshGrid');

function clearGrid() {
    gridContainer.innerHTML = '';
}

refreshGrid.addEventListener('click',clearGrid);