// Show a buzzword phrase when the page loads
window.addEventListener("load", () => {
    const words = document.getElementById("words");
    words.innerHTML = createBuzzwordPhrase();
  });
  
  // Get the square element
  const square = document.getElementById("square");
  
  // Add event listeners to the square
  square.addEventListener("mouseover", () => {
    changeColour("red");
  });
  
  square.addEventListener("mouseout", () => {
    changeColour("gray");
  });
  
  square.addEventListener("click", () => {
    changeColour("green");
  });
  
  // Function to change square color
  function changeColour(colour) {
    square.style.backgroundColor = colour;
  }
  
  // Buzzword generator
  function createBuzzwordPhrase() {
    const words1 = ["scalable", "streamlined", "innovative", "strategic", "integrated"];
    const words2 = ["solutions", "platforms", "frameworks", "interfaces", "experiences"];
    const words3 = ["for the future", "that empower users", "built for growth", "that deliver impact", "to drive success"];
  
    const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  
    return `Welcome to Flatland — a ${rand(words1)} ${rand(words2)} ${rand(words3)}.`;
  }
  