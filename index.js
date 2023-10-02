

let colour = 'black';
let click = true;

function populateGrid(size){

    let grid = document.querySelector('.grid');
    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => cell.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalCells = size * size;
    for (let i = 0; i < totalCells; i++) {

        let cell = document.createElement('div');
        cell.addEventListener('mouseover', colourCell);
        cell.classList.add('cell');
        cell.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', cell);
    }
}

function changeSize(input){
    populateGrid(input);
}

function colourCell(){
    if (click){
        if (colour == 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = colour;
        }
    }

}

function changeColour(choice){

    colour = choice;
}

function clearGrid(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}



populateGrid(16);