let activeDrawing = false;
let selectedColor = "red";

document.addEventListener("mouseup", function() {
    activeDrawing = false;
})

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
        ncol.onclick = function () { colorCell(ncol); };
        ncol.addEventListener("mousedown", function() {
            activeDrawing = true;
            colorCell(ncol);
        });
        ncol.addEventListener("mouseover", function() {
            if (activeDrawing){
                colorCell(ncol);
            }
        });
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
            ncol.onclick = function () { colorCell(ncol); };
            ncol.addEventListener("mousedown", function() {
                activeDrawing = true;
                colorCell(ncol);
            });
            ncol.addEventListener("mouseover", function() {
                if (activeDrawing){
                    colorCell(ncol);
                }
            });
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
        ncol.onclick = function () { colorCell(ncol); };
        ncol.addEventListener("mousedown", function() {
            activeDrawing = true;
            colorCell(ncol);
        });
        ncol.addEventListener("mouseover", function() {
            if (activeDrawing){
                colorCell(ncol);
            }
        });
        nrow.appendChild(ncol);
        id.appendChild(nrow);
    }

    else {
        for (let i = 0; i < existingRows.length; i++) {
            let ncol = document.createElement('td');
            ncol.className = "individual-col";
            ncol.onclick = function () { colorCell(ncol); };
            ncol.addEventListener("mousedown", function() {
                activeDrawing = true;
                colorCell(ncol);
            });
            ncol.addEventListener("mouseover", function() {
                if (activeDrawing){
                    colorCell(ncol);
                }
            });
            existingRows[i].appendChild(ncol);
        }

    }
}
const changeColor = () => {
    selectedColor = document.getElementById("colorSelect").value;
}

const changeCellColor = (cell) => {
    cell.style.backgroundColor = selectedColor;
}


const fillUncoloredCells = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        if (allCells[i].style.backgroundColor == "" || allCells[i].style.backgroundColor == 'rgb(233, 238, 247)'){
            allCells[i].style.backgroundColor = selectedColor;
        }
    }
}

const resetCellColor = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        allCells[i].style.backgroundColor = "#E9EEF7";
    }
}

const fillAllCells = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        allCells[i].style.backgroundColor = selectedColor;
    }
}

const colorCell = function (ncol) {
    if (selectedColor != undefined) {
        ncol.style.backgroundColor = selectedColor; 
    }
}