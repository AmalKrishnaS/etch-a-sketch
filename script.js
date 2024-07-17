const parentDiv = document.querySelector('#grid-container');
const squareDiv = parentDiv.children; 


function CreateGrid(parentDiv) {
    for (let i=1; i<=16; i++) {
        for (let i=1; i<=16; i++) {
            const div = document.createElement('div');
            div.style.flexBasis = '60px';

            parentDiv.appendChild(div);
        }
    }
}

function handleHover(event){
    for (let i=0; i<squareDiv.length; i++) {
        if (event.target === squareDiv.item(i)) {
            squareDiv.item(i).style.backgroundColor = 'black';
        }
    }
}

CreateGrid(parentDiv);

parentDiv.addEventListener('mouseover', handleHover);
