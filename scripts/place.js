// Set the current year and last modified date in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Static temperature and wind speed values for windchill calculation
const temperature = 5; // in Celsius
const windSpeed = 10; // in km/h

// Function to calculate windchill
function calculateWindChill(temp, wind) {
  if ((temp <= 10 && wind > 4.8) || (temp <= 50 && wind > 3)) {
    // Wind chill formula for metric/imperial
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(2);
  } else {
    return "N/A";
  }
}

// Display wind chill value
document.getElementById("windchill").textContent =
  "Wind Chill: " + calculateWindChill(temperature, windSpeed) + "°C";
