//set up the 16 x 16 grid
//const grid = []; //something to hold each grid unit's data
const gridContainer = document.querySelector("#grid-container");
let numRows = 16;
let numColumns = 16;

//utilize a loop, focus on the process that needs to be repeated (creating a grid unit and adding it to the grid)
for(let i = 0; i < numRows; i++)
{
    const gridRow = document.createElement("div"); //create a div to store a row of divs
    gridRow.classList.add("row");

    gridContainer.appendChild(gridRow); //add the row to the container

    //grid[i] = []; //create a row in the grid
    for(let j = 0; j < numColumns; j++)
    {
        const gridUnit = document.createElement("div"); //create a div unit to store in a row div
        gridUnit.classList.add("unit");
        gridUnit.textContent = "X";

        gridRow.appendChild(gridUnit); //add the grid unit div to a row div
        
        //grid[i][j] = gridUnit;
    }
}


//add an event listener to all 256 units so that when the mouse goes over them, they are colored
//a for loop is good for this, as using querySelectorAll will yield a node list holding each div unit
let allUnits = document.querySelectorAll(".unit");
for(let i = 0; i < allUnits.length; i++)
{
    allUnits[i].addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "black";
    });
}