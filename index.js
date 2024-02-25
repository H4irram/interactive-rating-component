"use strict";

const submitBtn = document.querySelector(".btn");
const article1 = document.querySelector(".article--1");
const article2 = document.querySelector(".article--2");
const options = document.querySelectorAll(".option");
let selectedOption = 0;

// Add event listeners to capture user's selection
options.forEach((option) => {
  option.addEventListener("click", () => {
    selectedOption = option.textContent;
  });
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Check if an option is selected
  if (!selectedOption) {
    // If no option is selected, display an error message
    const errorMessage = document.querySelector(".error-message");
    errorMessage.textContent = "Please select a number before submitting.";
    return; // Exit the function early
  }

  // Hide the first article and display the thank you article
  article1.classList.add("hidden");
  article2.classList.remove("hidden");
  // Display the selected option on the thank you page
  const thankYouSpan = document.querySelector(".article--2 span");
  thankYouSpan.textContent = selectedOption;
});
