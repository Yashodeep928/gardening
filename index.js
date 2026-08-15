const garden = document.getElementById("garden");
const plantCursor = document.getElementById("plantCursor");
const buttons = document.querySelectorAll(".plant-btn")
const shovelButton = document.getElementById("shovelButton")
const plantCursorImage = document.getElementById("plantCursorImage");
console.log("All buttons",buttons)
const total_cell = 20;

let selectedPlant = null;


for (let i = 0; i < total_cell; i++) {

  const cell = document.createElement("div");

  cell.classList.add("garden-cell");

  cell.addEventListener("click", () => {

    if (!selectedPlant) {
      return;
    }

    cell.textContent = selectedPlant;

    selectedPlant = null;

    plantCursor.style.display = "none";
  });

  garden.appendChild(cell);
}


document.addEventListener("mousemove", (event) => {

  if (!selectedPlant) {
    return;
  }

  plantCursor.style.left = event.clientX + "px";
  plantCursor.style.top = event.clientY + "px";
});



buttons.forEach((button) => {

  button.addEventListener("click", () => {
    if (button.id === "shovelButton") {
      return;
    }
  
  selectedPlant = button.dataset.plant;

  plantCursor.textContent = selectedPlant;

  plantCursor.style.display = "block";
});

})


shovelButton.addEventListener("click" ,(e) => {
 console.log("Shovel clicked",e)
  selectedPlant = shovelButton.dataset.tool;

  plantCursorImage.src = selectedPlant;

  plantCursor.style.display = "block"

})