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