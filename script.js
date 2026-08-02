//set up the 16 x 16 grid
//const grid = []; //something to hold each grid unit's data
const gridContainer = document.querySelector("#grid-container");
let numRows = 16;
let numColumns = 16;

//utilize a loop, focus on the process that needs to be repeated (creating a grid unit and adding it to the grid)
function createGrid(numRows, numColumns)
{
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
}
createGrid(numRows, numColumns);


//add an event listener to all 256 units so that when the mouse goes over them, they are colored
//a for loop is good for this, as using querySelectorAll will yield a node list holding each div unit
let allUnits = document.querySelectorAll(".unit");

function attatchDrawFeatureToGridUnits(allUnits)
{
    for(let i = 0; i < allUnits.length; i++)
    {
        allUnits[i].addEventListener("mouseover", event => {
            //event.preventDefault();
            event.target.style.backgroundColor = "black";
        
        });
    }
}
attatchDrawFeatureToGridUnits(allUnits);


//event listener and loop to handle setting the grid size by the user's input
let resizeGridButton = document.querySelector("button")

resizeGridButton.addEventListener("click", event => {
    let userSelectedSize = prompt("Resize the square grid by inputting a positive integer (eg. '20' for a 20 x 20 grid). Maximum size is '100'. Minimum size is '4'.");
    userSelectedSize = Number(userSelectedSize);

    //handle invalid inputs
    while(typeof(userSelectedSize) == "NaN" || userSelectedSize % 1 != 0 || userSelectedSize < 4 || userSelectedSize > 100)
    {
        userSelectedSize = prompt("Invalid input, enter an integer between '4' and '100' to resize the grid.");
        userSelectedSize = Number(userSelectedSize);
    }

    numRows = userSelectedSize; numColumns = userSelectedSize;

    document.querySelectorAll(".unit").forEach(element => element.remove()); //delete current unit grid

    //build new unit grid based off of the user input
    createGrid(numRows, numColumns);
    attatchDrawFeatureToGridUnits(document.querySelectorAll(".unit"));
});