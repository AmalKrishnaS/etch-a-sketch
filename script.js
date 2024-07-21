function createGrid(dimension=100) {
    const parentDiv = document.querySelector('#grid-container');
    for (let i=1; i<=dimension; i++) {
        for (let i=1; i<=dimension; i++) {
            const childDiv = document.createElement('div');
            childDiv.style.cssText = `width: ${600/dimension}px; height:${600/dimension}px;`;

            parentDiv.appendChild(childDiv);
        }
    }
}

function handleHover(event){
    const parentDiv = document.querySelector('#grid-container');
    const childDiv = parentDiv.children;
    for (let i=0; i<childDiv.length; i++) {
        if (event.target === childDiv.item(i)) {
            childDiv.item(i).style.backgroundColor = 'black';
        }
    }
}

function resetAndResizeBoard() {
    const parentDiv = document.querySelector('#grid-container');
    const childDiv = parentDiv.children;

    function getDimension() {
        let dimension = +prompt('Enter dimension');
        while (!dimension || dimension<1 || dimension>100) {
            dimension = +prompt('invalid value, re-enter');
        }
        return dimension;
    }
    
    function removeGrid() {
        while(parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
    }

    const dimension = getDimension();
    removeGrid();
    createGrid(dimension);
}

function addEventListenerHover() {
    const parentDiv = document.querySelector('#grid-container');
    parentDiv.addEventListener('mouseover', handleHover);
}

function addEventListenerReset() {
    const resizeButton  = document.querySelector('#resize-button');
    resizeButton.addEventListener('click', resetAndResizeBoard);
}


createGrid();
addEventListenerHover();
addEventListenerReset();