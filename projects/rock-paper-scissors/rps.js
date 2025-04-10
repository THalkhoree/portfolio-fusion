const choices = document.querySelectorAll('.choice');
const status = document.getElementById('status');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const ties = document.getElementById('ties');
const resetButton = document.getElementById('reset');
const popup = document.getElementById('popup-celebration');

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.id;
    const computerChoice = getComputerChoice();

    status.textContent = 'Processing your move... ⏳';
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';

    setTimeout(() => {
      playerChoiceDisplay.textContent = `You chose: ${capitalize(playerChoice)}`;
      computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computerChoice)}`;

      const result = getResult(playerChoice, computerChoice);
      status.textContent = result;

      updateScore(result);
    }, 3000);
  });
});

resetButton.addEventListener('click', () => {
  winCount = 0;
  lossCount = 0;
  tieCount = 0;
  wins.textContent = '0';
  losses.textContent = '0';
  ties.textContent = '0';
  status.textContent = 'Make your move!';
  playerChoiceDisplay.textContent = '';
  computerChoiceDisplay.textContent = '';
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) return "It's a tie! 🤝";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win! 🎉';
  } else {
    return 'You lose! 😢';
  }
}

function updateScore(result) {
  if (result.includes('win')) {
    winCount++;
    wins.textContent = winCount;
    launchConfetti();
    showPopup("🏆 You Win!");
  } else if (result.includes('lose')) {
    lossCount++;
    losses.textContent = lossCount;
    showThumbDown();
    showPopup("💔 You Lost!");
  } else {
    tieCount++;
    ties.textContent = tieCount;
    showPopup("🤝 It's a Draw!");
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// 🎉 Confetti on win
function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// 👎 Thumbs-down on loss
function showThumbDown() {
  const emoji = document.createElement('div');
  emoji.textContent = '👎';
  emoji.style.position = 'fixed';
  emoji.style.top = '50%';
  emoji.style.left = '50%';
  emoji.style.fontSize = '3rem';
  emoji.style.transform = 'translate(-50%, -50%)';
  emoji.style.zIndex = '999';
  emoji.style.opacity = '1';
  emoji.style.transition = 'opacity 1s ease';

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.style.opacity = '0';
    setTimeout(() => emoji.remove(), 1000);
  }, 1000);
}

// 🎈 Celebration popup
function showPopup(message) {
  popup.textContent = message;
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 1500);
}

