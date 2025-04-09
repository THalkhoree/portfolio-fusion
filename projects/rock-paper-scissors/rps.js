const choices = document.querySelectorAll('.choice');
const status = document.getElementById('status');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const ties = document.getElementById('ties');
const resetButton = document.getElementById('reset');

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.id;
    const computerChoice = getComputerChoice();

    // Show suspense message
    status.textContent = 'Processing your move... ⏳';
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';

    setTimeout(() => {
      playerChoiceDisplay.textContent = `You chose: ${capitalize(playerChoice)}`;
      computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computerChoice)}`;

      const result = getResult(playerChoice, computerChoice);
      status.textContent = result;

      updateScore(result);
    }, 3000); // ⏱ 3-second delay
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
  } else if (result.includes('lose')) {
    lossCount++;
    losses.textContent = lossCount;
  } else {
    tieCount++;
    ties.textContent = tieCount;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
