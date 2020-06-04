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