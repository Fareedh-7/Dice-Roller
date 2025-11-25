"use strict";

function roll() {
  const diceInput = document.getElementById("diceInput").value;
  const diceResult = document.querySelector(".diceResult");
  const diceImages = document.querySelector(".diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < diceInput; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<img src= "./src/Dice_Images/${value}.png" alt = "Dice ${value}">`
    );
  }
  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(" ");
}
