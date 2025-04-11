// ==== Buzzword Generator ====
function createBuzzwordPhrase() {
  const words1 = ["scalable", "strategic", "innovative", "streamlined", "agile"];
  const words2 = ["platform", "solution", "framework", "interface", "pipeline"];
  const words3 = ["for success", "to empower users", "for the future", "with results", "that drives innovation"];

  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  return `✨ A ${rand(words1)} ${rand(words2)} ${rand(words3)} ✨`;
}

// ==== Display Buzzword on Load ====
window.addEventListener("load", () => {
  const words = document.getElementById("words");
  if (words) {
    words.textContent = createBuzzwordPhrase();
  }
});

// ==== Interactive Square Logic (Steps 5–8) ====
const square = document.getElementById("square");

if (square) {
  square.addEventListener("mouseover", () => changeColour("red"));
  square.addEventListener("mouseout", () => changeColour("gray"));
  square.addEventListener("click", () => changeColour("green"));
}

function changeColour(colour) {
  if (square) {
    square.style.backgroundColor = colour;
  }
}


  