// Dynamically display the current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", function () {
  // Set the current year dynamically
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set the last modified date dynamically
  document.getElementById("lastModified").textContent = document.lastModified;

  // Hamburger menu functionality
  const hamburgerButton = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav");

  hamburgerButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });
});
