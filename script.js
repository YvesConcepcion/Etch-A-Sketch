"use strict mode";

const sketchContainer = document.querySelector(".sketch-container");

function createGrid(gridAmount) {
  for (let i = 1; i < gridAmount; i++) {
    const row = document.createElement("div");
    sketchContainer.appendChild(row);

    for (let j = 0; j < gridAmount; j++) {
      const square = document.createElement("div");
      square.setAttribute("id", "innerSquare");
      square.classList.add("square");
      square.style.width = `${600 / gridAmount}px`;
      square.style.height = `${600 / gridAmount}px`;
      row.appendChild(square);
    }
  }
}

createGrid(16);
