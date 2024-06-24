const choices = ["rock", "paper", "scissors"];
const images = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png"
};

document.querySelectorAll('.choices img').forEach(img => {
    img.addEventListener('click', () => {
        const userChoice = img.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        displayChoices(userChoice, computerChoice);
        determineWinner(userChoice, computerChoice);
    });
});

function displayChoices(userChoice, computerChoice) {
    document.getElementById('your-pick').src = images[userChoice];
    document.getElementById('computer-pick').src = images[computerChoice];
}

function determineWinner(userChoice, computerChoice) {
    let resultText;
    if (userChoice === computerChoice) {
        resultText = `It's a tie! You both chose ${userChoice}.`;
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        resultText = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultText = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
    document.getElementById('result').innerText = resultText;
}
