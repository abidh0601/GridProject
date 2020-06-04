let selectedColor = "red";

const deleteRow = () => {
    let grid = document.getElementById("grid");
    grid.lastChild.remove();
}

const deleteColumn = () => {
    let existingRows = document.querySelectorAll(".individual-row");
    for (let i = 0; i < existingRows.length; i++){
        existingRows[i].lastChild.remove();
    }
}

const addRow = function () {
    let id = document.getElementById('grid');
    let existingRows = document.getElementsByClassName('individual-row');
    if (existingRows.length === 0) {
        let nrow = document.createElement('tr');
        nrow.className = "individual-row";
        let ncol = document.createElement('td');
        ncol.className = "individual-col";
        nrow.appendChild(ncol);
        id.appendChild(nrow);
    }
    else {
        let existingCols = document.getElementsByClassName('individual-row')[0].childNodes;
        let nrow = document.createElement('tr');
        nrow.className = "individual-row";
        for (let i = 0; i < existingCols.length; i++) {
            let ncol = document.createElement('td');
            ncol.className = "individual-col";
            nrow.appendChild(ncol);
        }
        id.appendChild(nrow);
    }
}

const addCol = function () {
    let id = document.getElementById('grid');
    let existingRows = document.getElementsByClassName('individual-row');

    if (existingRows.length === 0) {
        let nrow = document.createElement('tr');
        nrow.className = "individual-row";
        let ncol = document.createElement('td');
        ncol.className = "individual-col";

        nrow.appendChild(ncol);
        id.appendChild(nrow);
    }

    else {
        for (let i = 0; i < existingRows.length; i++) {
            let ncol = document.createElement('td');
            ncol.className = "individual-col";
            existingRows[i].appendChild(ncol);
        }
    }
}
const changeColor = (color) => {
    selectedColor = color;
}

const changeCellColor = (cell) => {
    cell.style.backgroundColor = selectedColor;
}

const fillUncoloredCells = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        if (allCells[i].style.backgroundColor !== rgb(233, 238, 247)){
            allCells[i].style.backgroundColor = selectedColor;
        }
    }
}

const resetCellColor = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let cell in allCells){
        cell.style.backgroundColor = rgb(233, 238, 247);
    }
}

const fillAllCells = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let cell in allCells){
        cell.style.backgroundColor = selectedColor;
    }
}