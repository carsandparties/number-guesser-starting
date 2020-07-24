let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (guess, target) => Math.abs(target - guess);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess < 1 || humanGuess > 9) {
        alert("Guess must be between 1 and 9!");
    }
  const humanDifference = getAbsoluteDistance(humanGuess, targetGuess);
  const computerDifference = getAbsoluteDistance(computerGuess, targetGuess);
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;