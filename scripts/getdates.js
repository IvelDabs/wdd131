// Get the current year and populate the #currentyear span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the document's last modified date and populate the #lastModified paragraph
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;
