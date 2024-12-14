// Local storage visit counter
if (!localStorage.getItem("visitCount")) {
  localStorage.setItem("visitCount", 0);
}
let visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
localStorage.setItem("visitCount", visitCount);
document.getElementById(
  "visitCount"
).textContent = `You have visited this site ${visitCount} times.`;

// Button click event to load dynamic content
document.getElementById("loadRecipeBtn").addEventListener("click", function () {
  // Load a specific coffee recipe dynamically
  console.log("Load recipe functionality here!");
});
