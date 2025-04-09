// Greet the user with a dynamic buzzword phrase on page load
window.addEventListener("load", () => {
    const words = document.getElementById("words");
    words.innerHTML = createBuzzwordPhrase();
  });
  
  // Handle square color changes
  const square = document.getElementById("square");
  
  square.addEventListener("mouseover", () => {
    changeColour("red");
  });
  
  square.addEventListener("mouseout", () => {
    changeColour("gray");
  });
  
  square.addEventListener("click", () => {
    changeColour("green");
  });
  
  // Function to change square background color
  function changeColour(colour) {
    square.style.backgroundColor = colour;
  }
  
  // Function to generate a random buzzword phrase
  function createBuzzwordPhrase() {
    const words1 = ["integrated", "total", "systematized", "parallel", "functional", "responsive", "optimal"];
    const words2 = ["management", "organizational", "monitored", "reciprocal", "digital", "logistical"];
    const words3 = ["options", "flexibility", "capability", "mobility", "programming", "interface"];
  
    const rand1 = words1[Math.floor(Math.random() * words1.length)];
    const rand2 = words2[Math.floor(Math.random() * words2.length)];
    const rand3 = words3[Math.floor(Math.random() * words3.length)];
  
    return `Welcome to Flatland! We deliver ${rand1} ${rand2} ${rand3}.`;
  }
  