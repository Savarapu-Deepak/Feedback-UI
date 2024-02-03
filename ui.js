"use strict";

const ratingEls = document.querySelectorAll(".rate");
const btn = document.getElementById("btn");
let selectedRating = "";
const containerEl = document.getElementById("container");

// For Each Loop Takes a Function as a Parameter.

ratingEls.forEach((El) => {
  El.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.textContent || event.target.parentNode.textContent;
    event.target.parentNode.classList.add("active");

    // console.log(event.target.parentNode.textContent);
  });
});

btn.addEventListener("click", () => {
  if (selectedRating) {
    document.querySelector("body").style.backgroundColor = "Black";
    containerEl.innerHTML = `<h1 class="reply">Thank You..!</h1>
    <br><h2 class="feed">Feedback Choosen: <span>${selectedRating}</span></h2>
    <p class="message">Your Feedback is Important for us. Satey Safe :) </p>`;
  } else {
    alert("Feedback Required...!");
  }
});

// Active Remove Function....

function removeActive() {
  ratingEls.forEach((El) => {
    El.classList.remove("active");
  });
}
