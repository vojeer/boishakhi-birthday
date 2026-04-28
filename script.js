// Typing
const text = "You are my forever, Boishakhi ❤️";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// Music
function playMusic() {
  document.getElementById("bg-music").play();
}

// Popup
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}