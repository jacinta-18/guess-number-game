let random_number = Math.floor(Math.random()*100) + 1;


const guessesList = document.querySelector('.guesses-list');
const lastResult = document.querySelector('.last-result');
const lowOrHi = document.querySelector('.low-or-hi');
const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.field-input');


let guess_count = 1;
let reset_button;


function checkGuess(){
    // printing previous guesses
const userGuess = Number(guessField.value);

if (guess_count === 1) {
guessesList.textContent = "previous guesses: "
   
}
guessesList.textContent += userGuess + ', '




// check if the user guessed right
if  ( userGuess === random_number ){
    lastResult.textContent = "congratulations! you got it right.";
    lastResult.style.backgroundColor =  'green'
    lowOrHi.textContent = ''
    setGameOver()

}


// check if the user have exhausted the guess count
// let the user know when they guess wrong. Give the user hint if the guess was too low or too high.

else if ( guess_count === 10){
    lastResult.textContent = "!!!GAME OVER";
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = ''
    setGameOver()
}
else {
    lastResult.textContent = "Wrong";
    lastResult.style.backgroundColor = 'red';
    if(userGuess < random_number){
        lowOrHi.textContent = "last guess was too low"
    }
    else if (userGuess > random_number){
        lowOrHi.textContent = "last guess was too high"
    }
    



}



// increase counter, reset and make input focus
guess_count++
guessField.value = ''
guessField.focus()


}

guessSubmit.addEventListener('click', checkGuess)

// display input field,write gameover and call the reset game function
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled  = true;

reset_button = document.createElement('button');
reset_button.textContent = "start new game"


document.querySelector(".wrapper").append(reset_button)
reset_button.addEventListener('click', resetGame )

}


function resetGame(){
    guess_count = 1
    const resetParas = document.querySelectorAll('.result-paras p');
    console.log(resetParas);
    for (const resetPara of resetParas){
        resetPara.textContent = ''
    }
    // remove the resetbutton
    reset_button.parentNode.removeChild(reset_button);

    // enable input guessSubmit and guessField
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ''
    guessField.focus()

    lastResult.style.backgroundColor = 'white';

    let random_number = Math.floor(Math.random()*100) + 1;
    

}

