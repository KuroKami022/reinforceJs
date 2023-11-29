let secretWord = 'javascript'
let tryAmount = 3

function verify(guess, secretWord) {
    if (guess.toLowerCase() === secretWord) {
        return true;
    }
    return false;
}

function userGuess() {
    alert('Welcome to the secret word game');
    alert('You have 3 chances');
    alert('You clue is a programming lenguage');

    while (tryAmount > 0) {
        let guess = prompt('Guess the word')

        if (verify(guess, secretWord)) {
            alert('correct, you did well.')
            break;
        } else {
            tryAmount--;
            if (tryAmount > 0) {
                alert(`Incorrect you still have ${tryAmount} guessing try`);
            } else {
                alert(`You ran out of trys, secret word was ${secretWord}`);
            }
        }
    }
}

userGuess();