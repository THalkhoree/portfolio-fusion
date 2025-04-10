// Show a buzzword phrase when the page loads
window.addEventListener("load", () => {
  const words = document.getElementById("words");
  if (words) {
    words.innerHTML = createBuzzwordPhrase();
  }
});

// Interactive square logic
const square = document.getElementById("square");

if (square) {
  square.addEventListener("mouseover", () => {
    changeColour("red");
  });

  square.addEventListener("mouseout", () => {
    changeColour("gray");
  });

  square.addEventListener("click", () => {
    changeColour("green");
  });
}

function changeColour(colour) {
  if (square) square.style.backgroundColor = colour;
}

function createBuzzwordPhrase() {
  const words1 = ["scalable", "strategic", "innovative", "streamlined", "agile"];
  const words2 = ["platform", "solution", "framework", "interface", "pipeline"];
  const words3 = ["for success", "to empower users", "for the future", "with results", "that drives innovation"];

  const rand = arr => arr[Math.floor(Math.random() * arr.length)];

  return `Welcome to Flatland — a ${rand(words1)} ${rand(words2)} ${rand(words3)}.`;
}
  