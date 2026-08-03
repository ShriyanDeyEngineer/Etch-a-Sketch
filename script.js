//set up the 16 x 16 grid
const gridContainer = document.querySelector("#grid-container");
const gridContainerSize = 960;
let numGridUnits = 256;

const colors = ["#0000FF", "#8A2BE2", "#7FFF00", "#B8860B", "#FF8C00", "#006400", "#8B008B", "#00FFFF", "#FFDEAD", "#808000", "#AFEEEE", "#008080","#B22222", "#483D8B", "#7FFFD4"];


//utilize a loop, focus on the process that needs to be repeated (creating a grid unit and adding it to the grid)
function createGrid(numGridUnits)
{
    for(let i = 1; i <= numGridUnits; i++)
    {
        const gridUnit = document.createElement("div"); //create a div unit to store in a row div
        gridUnit.classList.add("unit"); //assign an identifier to the unit
        gridUnit.style.width = String((100 / Math.sqrt(numGridUnits)).toFixed(10)) + "%";/*String(Math.floor(gridContainerSize / Math.sqrt(numGridUnits))) + "px";*/ //set the width based on the selected number of grid units
        
        gridContainer.appendChild(gridUnit); //add the grid unit div to a row div
    }
}
createGrid(numGridUnits);


//add an event listener to all units so that when the mouse goes over them, they are colored
//a for loop is good for this, as using querySelectorAll will yield a node list holding each div unit
let allUnits = document.querySelectorAll(".unit");

function attatchDrawFeatureToGridUnits(allUnits)
{
    for(let i = 0; i < allUnits.length; i++)
    {
        allUnits[i].addEventListener("mouseover", event => {
            let randomColor = Math.floor(Math.random() * 100 % colors.length);
            event.target.style.backgroundColor = colors[randomColor]; //select a random color for a selected unit
        });
    }
}
attatchDrawFeatureToGridUnits(allUnits);


//event listener and loop to handle setting the grid size by the user's input
let resizeGridButton = document.querySelector("button");

resizeGridButton.addEventListener("click", event => {
    let userSelectedSize = prompt("Resize the square grid by inputting a positive integer (eg. '20' for a 20 x 20 grid). Maximum size is '100'. Minimum size is '4'.");
    userSelectedSize = Number(userSelectedSize);

    //handle invalid inputs
    while(typeof(userSelectedSize) == "NaN" || userSelectedSize % 1 != 0 || userSelectedSize < 4 || userSelectedSize > 100)
    {
        userSelectedSize = prompt("Invalid input, enter an integer between '4' and '100' to resize the grid.");
        userSelectedSize = Number(userSelectedSize);
    }

    numGridUnits = userSelectedSize * userSelectedSize;

    //delete current unit grid by deleting each grid unit
    document.querySelectorAll(".unit").forEach(element => element.remove());

    //build new unit grid based off of the user input
    createGrid(numGridUnits);
    attatchDrawFeatureToGridUnits(document.querySelectorAll(".unit"));
});