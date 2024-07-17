const parentDiv = document.querySelector('#grid-container');

function CreateGrid(parentDiv) {
    for (let i=1; i<=16; i++) {
        for (let i=1; i<=16; i++) {
            const div = document.createElement('div');
            div.style.flexBasis = '60px';

            parentDiv.appendChild(div);
        }
    }
}

CreateGrid(parentDiv);