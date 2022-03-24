/*
GAME FUNCTION/RULES
-Players must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify player of the correct answer if he/she loses
-Let player choose to play again
*/

//Game Values
let min = 1
    max = 10
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI Min and Max 
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
    
   //Validate Input
   if (guess === NaN || guess < min ||  guess > max) {
       setMessage(`please  enter a number between ${min} and ${max}`);
   } 
})

//Set message
function setMessage(msg){
   message.textContent = msg;
}