"use strict";

//Element
const sketchContainer = document.querySelector(".sketch-container");
const btnBlack = document.querySelector(".black");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const btnEraser = document.querySelector(".eraser");
let color = "black";
function createGrid(gridAmount) {
  for (let i = 0; i < gridAmount; i++) {
    const row = document.createElement("div");
    row.style.width = "100%";
    row.style.height = `${100 / gridAmount}%`;
    sketchContainer.appendChild(row);

    for (let j = 0; j < gridAmount; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${100 / gridAmount}%`;
      square.style.height = "100%";
      square.style.backgroundColor = "white";
      row.appendChild(square);
    }
  }
}

createGrid(16);

const changeColor = function (event) {
  let square = event.target;
  square.style.backgroundColor = color;
};

//Buttons
btnBlack.onclick = function () {
  color = "black";
};
btnRed.onclick = function () {
  color = "red";
};
btnGreen.onclick = function () {
  color = "green";
};
btnBlue.onclick = function () {
  color = "blue";
};

btnEraser.onclick = function () {
  color = "white";
};

sketchContainer.addEventListener("mouseover", changeColor);
