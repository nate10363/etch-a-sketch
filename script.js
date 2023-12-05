const btn = document.querySelector('#btn');
const gridContainer = document.getElementById('gridContainer');



// setting up grid size
var size = 0;

// Creating x grid items

function storePrompt() {
    size = prompt('How many grids?');
    return size;
}

function changeColor(e) {
    e.target.style.backgroundColor = 'red';
}

function createGridItem() {
    let completeGrid = size * size;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < completeGrid; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(gridItem);
        
    } 
}


// function changeColor() {
//     gridItem.setAttribute('style', 'background-color: black;');
// }

// function changeColor(e) {
//       e.target.style.backgroundColor = currentColor
//   }

function createGrid() {
    storePrompt();
    createGridItem();
}

btn.addEventListener('click', createGrid);



const attempt = document.querySelector('#attempt');

function chBackcolor() {
    attempt.style.backgroundColor = 'red';
}

attempt.addEventListener('mouseover', chBackcolor);









// const changeme = document.querySelector('#changeme');

// function chBackcolor() {
//     changeme.style.backgroundColor = 'red';
// }

// changeme.addEventListener('click', chBackcolor);