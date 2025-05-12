let score = 0;
let timeLeft = 10;
let interval;
const paragraphElement = document.getElementById('paragraph');
const inputBox = document.getElementById('inputBox');
const scoreElement = document.getElementById('score');
const timeLeftElement = document.getElementById('timeLeft');

const ran_para = [
    'The quick brown fox jumps over the lazy dog.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Coding can be both fun and challenging at the same time.',
  'JavaScript is a versatile programming language.',
  'Practice makes perfect, especially in software development.',
  'Web development includes both frontend and backend technologies.',
  'The sun rises in the east and sets in the west.',
  'It was a bright cold day in April, and the clocks were striking thirteen.',
  'She sells seashells by the seashore.',
  'Typing speed tests help improve your overall typing skills.'
];

let currentParagraph = '';
let paragraphWords = [];
let currentWordIndex = 0;

// Function to get a random paragraph
function getRandomParagraph() {
    return ran_para[Math.floor(Math.random() * ran_para.length)];
}

// Add paragraph to DOM and reset word index
function addParagraphToDOM() {
    currentParagraph = getRandomParagraph();
    paragraphElement.innerText = currentParagraph;
    paragraphWords = currentParagraph.split(' ');
    currentWordIndex = 0; // Reset to the start of the new paragraph
}

// Event listener for input
inputBox.addEventListener('input', function (event) {
    const input = event.target.value.trim();

    if (input === paragraphWords[currentWordIndex]) {
        score++;
        timeLeft += 2; // Increase time by 2 seconds per correct word
        scoreElement.innerText = score;
        inputBox.value = ''; // Clear input box
        currentWordIndex++; // Move to the next word

        // Check if all words in the current paragraph are typed
        if (currentWordIndex >= paragraphWords.length) {
            addParagraphToDOM(); // Load a new paragraph when one is completed
        }
    }
});

// Countdown function
function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftElement.innerText = `${timeLeft}s`;
    } else {
        clearInterval(interval);
        alert('Game Over! Your final score is ' + score);
        inputBox.disabled = true; // Disable input after time runs out
    }
}

// Start the game by adding a random paragraph and initiating the countdown
addParagraphToDOM();
interval = setInterval(countdown, 1000);
