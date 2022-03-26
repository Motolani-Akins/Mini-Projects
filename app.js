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
   if (isNaN(guess) || guess < min ||  guess > max) {
       setMessage(`please  enter a number between ${min} and ${max}`, 'red');
   } 

//Check if won
    if (guess === winningNum) {
        //Game Over - Won

        gameOver(true, `${winningNum} is correct, YOU WIN!`)
        
    } else {
        //Wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0){
        //Game Over - lost
        gameOver(false, `Game Over loser. The correct number was ${winningNum}.Don't cry too much.`)

       
        } else{
        //Game Continues - answer wrong 
        //Change border color
        guessInput.style.borderColor = 'red';
        //Clear input
        guessInput.value = '';
        //Tell user they guessed wrong
        setMessage(`Your Guess is Incorrect. ${guessesLeft} guesses left`, 'red');  
        }
    }

})

//Game over
function gameOver(won, msg ){
    let color;
    won === true ? color = 'green' : color = 'red'; //if won is true, color should be true, else color should be red.
    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color ; 
    //Set message
    setMessage(msg);
};
 
//Set message
function setMessage(msg, color){
   message.style.color = color;
   message.textContent = msg;
}