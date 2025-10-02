// --- ⏰ Clock Code ---
// This part makes the clock on your screen work.

function showTheTime() {
  // Get the real time right now.
  let now = new Date();

  // Make sure the numbers always have two digits (like 07 instead of 7).
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  // Put the hours, minutes, and seconds on the page.
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// We need to run the clock function every second to keep the time updated.
setInterval(showTheTime, 1000);

// --- 🖼️ Wallpaper Code ---
// This part lets you change and save your background picture.

function changeWallpaper() {
  // Get the picture link the user typed in the box.
  let pictureLink = document.getElementById("walpaperInput").value;

  // Change the page's background to that picture.
  document.body.style.backgroundImage = `url('${pictureLink}')`;

  // Save the picture link so we remember it for next time.
  localStorage.setItem("savedWallpaper", pictureLink);
}

function loadSavedWallpaper() {
  // Look for a saved picture link.
  let savedLink = localStorage.getItem("savedWallpaper");

  // If we found a saved link...
  if (savedLink) {
    // ...change the background to the saved picture.
    document.body.style.backgroundImage = `url('${savedLink}')`;
    // And put the link back in the settings box.
    document.getElementById("walpaperInput").value = savedLink;
  }
}

// Load the saved wallpaper right when the page opens.
loadSavedWallpaper();

// --- 🔍 Search and Power Buttons Code ---
// This part makes the other buttons work.

function search() {
  // Get what the user typed in the search box.
  let searchText = document.getElementById("search").value;

  // Create a Google search link with the user's text.
  let googleLink = "https://www.google.com/search?q=" + searchText;

  // Go to the Google search page.
  window.location.href = googleLink;
}

function restart() {
  // This reloads (or refreshes) the webpage.
  location.reload();
}