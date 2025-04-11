// 🌙 Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙';
toggleButton.setAttribute('aria-label', 'Toggle dark mode');
Object.assign(toggleButton.style, {
  position: 'fixed',
  top: '10px',
  right: '10px',
  padding: '0.5rem 1rem',
  border: '2px solid white',
  backgroundColor: '#a0134d',
  color: 'white',
  borderRadius: '20px',
  cursor: 'pointer',
  zIndex: '1000',
  fontSize: '1rem'
});
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// 🌸 Petal Fall Animation
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
  petal.textContent = '🌸';
  document.body.appendChild(petal);

  // Remove the petal after animation completes
  setTimeout(() => {
    petal.remove();
  }, 10000);
}

// Launch multiple petals on load
window.addEventListener('load', () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createPetal, i * 300);
  }
});
