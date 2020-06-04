const deleteRow = () => {
    let grid = document.getElementById("grid");
    grid.lastChild.remove();
}

const deleteColumn = () => {
    let existingRows = document.querySelectorAll('.individual-row');
    for (let i = 0; i < existingRows.length; i++){
        existingRows.lastChild.remove();
    }
}