let activeDrawing = false; //true when mouse button is pressed and drawing is active
let selectedColor = "#E9EEF7"; //current color

//turns off drawing whenever the mouse button is released
document.addEventListener("mouseup", function() {
    activeDrawing = false;
})

//deletes the last row in the grid
const deleteRow = () => {
    let grid = document.getElementById("grid");
    grid.lastChild.remove();
}

//deletes the last column in the grid
const deleteColumn = () => {
    let existingRows = document.querySelectorAll(".individual-row");
    for (let i = 0; i < existingRows.length; i++){
        existingRows[i].lastChild.remove();
    }
}

//adds the row to the end of the grid with the same number of columns as all other rows
const addRow = function () {
    let id = document.getElementById('grid');
    let existingRows = document.getElementsByClassName('individual-row');
    //create the first row in the grid
    if (existingRows.length === 0) {
        let nrow = document.createElement('tr');
        nrow.className = "individual-row";
        let ncol = document.createElement('td');
        ncol.className = "individual-col";
        ncol.onclick = function () { colorCell(ncol); };
        //activates coloring feature
        ncol.addEventListener("mousedown", function() {
            activeDrawing = true;
            colorCell(ncol);
        });
        //colors the cell whenever the mouse with the pressed button moves over the cell
        ncol.addEventListener("mouseover", function() {
            if (activeDrawing){
                colorCell(ncol);
            }
        });
        nrow.appendChild(ncol);
        id.appendChild(nrow); //append the row to the table
    }
    //create a new row when the grid is not empty
    else {
        let existingCols = document.getElementsByClassName('individual-row')[0].childNodes;
        let nrow = document.createElement('tr');
        nrow.className = "individual-row";
        for (let i = 0; i < existingCols.length; i++) {
            let ncol = document.createElement('td');
            ncol.className = "individual-col";
            ncol.onclick = function () { colorCell(ncol); };
            //activate coloring
            ncol.addEventListener("mousedown", function() {
                activeDrawing = true;
                colorCell(ncol);
            });
            //color the cell if coloring is active
            ncol.addEventListener("mouseover", function() {
                if (activeDrawing){
                    colorCell(ncol);
                }
            });
            nrow.appendChild(ncol);
        }
        id.appendChild(nrow); //append the row to the table
    }
}

//adds the column to the end of the grid
const addCol = function () {
    let id = document.getElementById('grid');
    let existingRows = document.getElementsByClassName('individual-row');

    //adds a column if the grid is empty
    if (existingRows.length === 0) {
        let nrow = document.createElement('tr');
        nrow.className = "individual-row";
        let ncol = document.createElement('td');
        ncol.className = "individual-col";
        ncol.onclick = function () { colorCell(ncol); };
        //activate coloring feature
        ncol.addEventListener("mousedown", function() {
            activeDrawing = true;
            colorCell(ncol);
        });
        //color the cell if the mouse button is pressed and coloring is active
        ncol.addEventListener("mouseover", function() {
            if (activeDrawing){
                colorCell(ncol);
            }
        });
        nrow.appendChild(ncol);
        id.appendChild(nrow);
    }
    //adds a column if the grid is not empty
    else {
        for (let i = 0; i < existingRows.length; i++) {
            let ncol = document.createElement('td');
            ncol.className = "individual-col";
            ncol.onclick = function () { colorCell(ncol); };
            //activate coloring
            ncol.addEventListener("mousedown", function() {
                activeDrawing = true;
                colorCell(ncol);
            });
            //color the cell if the mouse button is pressed and coloring is active
            ncol.addEventListener("mouseover", function() {
                if (activeDrawing){
                    colorCell(ncol);
                }
            });
            existingRows[i].appendChild(ncol);
        }

    }
}

//changes the selected color
const changeColor = () => {
    selectedColor = document.getElementById("colorSelect").value;
}


//fills all of the cells that have a default color
const fillUncoloredCells = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        if (allCells[i].style.backgroundColor == "" || allCells[i].style.backgroundColor == 'rgb(233, 238, 247)'){
            allCells[i].style.backgroundColor = selectedColor;
        }
    }
}

//sets the color of all cells to default
const resetCellColor = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        allCells[i].style.backgroundColor = "#E9EEF7";
    }
}

//sets the color of all cells to the selected color
const fillAllCells = () => {
    let allCells = document.querySelectorAll(".individual-col");
    for (let i = 0; i < allCells.length; i++){
        allCells[i].style.backgroundColor = selectedColor;
    }
}

//changes the color of an individual cell
const colorCell = function (ncol) {
    if (selectedColor != undefined) {
        ncol.style.backgroundColor = selectedColor; 
    }
}